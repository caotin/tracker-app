/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	AUTH_PERSONTRACKER19BB1D90_USERPOOLID
	GEO_MAPB7648833_NAME
	API_PERSONTRACKER_GRAPHQLAPIIDOUTPUT
	API_PERSONTRACKER_GRAPHQLAPIENDPOINTOUTPUT
	API_PERSONTRACKER_GRAPHQLAPIKEYOUTPUT
	API_PERSONTRACKER_INCOMINGDATATABLE_NAME
	API_PERSONTRACKER_INCOMINGDATATABLE_ARN
	API_PERSONTRACKER_USERDEVICEMAPPINGTABLE_NAME
	API_PERSONTRACKER_USERDEVICEMAPPINGTABLE_ARN
	TRACKER_NAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// exports.handler = async (event) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);
//     return {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  }, 
//         body: JSON.stringify('Hello from Lambda!'),
//     };
// };
import {
  LocationClient,
  BatchUpdateDevicePositionCommand,
} from "@aws-sdk/client-location";

const locationClient = new LocationClient({});

// type LocationEvent = {
//   type: "location";
//   id: string;
//   timestamp: string;
//   lat: number;
//   lng: number;
// };

// type Event = Extract<IoTEvent<LocationEvent>, { type: "location" }>;

export const handler = async (event) => {
  const { id, lng, lat, timestamp } = event;

  const updates = [
    {
      DeviceId: id,
      SampleTime: new Date(timestamp),
      Position: [lng, lat],
    },
  ];
  try {
    await locationClient.send(
      new BatchUpdateDevicePositionCommand({
        TrackerName: process.env.TRACKER_NAME,
        Updates: updates,
      })
    );

    console.info("Successfully updated device position");
  } catch (err) {
    console.error(err);
    throw err;
  }
};
