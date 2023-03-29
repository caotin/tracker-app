/* Amplify Params - DO NOT EDIT
	API_PERSONTRACKER_GRAPHQLAPIENDPOINTOUTPUT
	API_PERSONTRACKER_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const { Sha256 } = require("@aws-crypto/sha256-js");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { SignatureV4 } = require("@aws-sdk/signature-v4");
const { HttpRequest } = require("@aws-sdk/protocol-http");
const { default: fetch, Request } = require("node-fetch");

const GRAPHQL_ENDPOINT = process.env.API_PERSONTRACKER_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.REGION || "ap-southeast-1";

const query = /* GraphQL */ `
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
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const { id, lng, lat, clientId } = event;

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: "appsync",
    sha256: Sha256,
  });

  const requestToBeSigned = new HttpRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body: JSON.stringify({
      query,
      operationName: "UpdateIncomingData",
      variables: {
        input: {
          deviceId: id,
          payload: { longitude: lng, latitude: lat },
          clientId,
        },
      },
    }),
    path: endpoint.pathname,
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(GRAPHQL_ENDPOINT, signed);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: error.message,
        },
      ],
    };
  }

  return {
    statusCode,
    body: JSON.stringify(body),
  };
};
