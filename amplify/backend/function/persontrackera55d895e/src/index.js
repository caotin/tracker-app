// import { IoTEvent } from "aws-lambda";
import { Sha256 } from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import p from "phin";
import { URL } from "url";

const APPSYNC_ENDPOINT = process.env.GRAPHQL_URL;
if (!APPSYNC_ENDPOINT) {
  throw new Error("GRAPHQL_URL env var is not set");
}

// type Event = Extract<IoTEvent<LocationEvent>, { type: "locationPayload" }>;

exports.handler = async (event) => {
  const { id, lng, lat } = event;

  const updatePosition = {
    query: `
    mutation UpdateIncomingData(
      $input: UpdateIncomingDataInput!
      $condition: ModelIncomingDataConditionInput
      ) {
        updateIncomingData(input: $input, condition: $condition) {
          deviceId
          payload {
            latitude
            longitude
          }
          clientId
          timestamp
        }
      }
    `,
    operationName: "UpdateIncomingData",
    variables: {
      input: {
        deviceId: id,
        payload: { lng, lat },
        clientId,
      },
    },
  };

  const url = new URL(APPSYNC_ENDPOINT);

  const request = new HttpRequest({
    hostname: url.hostname,
    path: url.pathname,
    body: JSON.stringify(updatePosition),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: url.hostname,
    },
  });

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    service: "appsync",
    region: process.env.AWS_REGION,
    sha256: Sha256,
  });

  const { headers, body, method } = await signer.sign(request);

  try {
    const result = await p({
      url: APPSYNC_ENDPOINT,
      headers,
      data: body,
      method,
      timeout: 5000,
      parse: "json",
    });

    console.debug(result);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to execute GraphQL mutation");
  }
};
