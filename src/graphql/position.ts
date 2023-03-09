import { graphqlOperation } from "aws-amplify";
export interface Payload {
  latitude: number;
  longitude: number;
}
export interface IncomingData {
  deviceId: string;
  payload: Payload;
  clientId: string;
  timestamp: string;
}
export const onUpdate = graphqlOperation(`
subscription onUpdateIncomingData($filter: ModelSubscriptionIncomingDataFilterInput, $clientId: String) {
  onUpdateIncomingData(filter: $filter, clientId: $clientId) {
    clientId
    deviceId
    timestamp
    payload {
      latitude
      longitude
    }
  }
}
`);
