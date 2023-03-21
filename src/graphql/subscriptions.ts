/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIncomingData = /* GraphQL */ `
  subscription OnCreateIncomingData(
    $filter: ModelSubscriptionIncomingDataFilterInput
    $clientId: String
  ) {
    onCreateIncomingData(filter: $filter, clientId: $clientId) {
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
export const onUpdateIncomingData = /* GraphQL */ `
  subscription OnUpdateIncomingData(
    $filter: ModelSubscriptionIncomingDataFilterInput
    $clientId: String
  ) {
    onUpdateIncomingData(filter: $filter, clientId: $clientId) {
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
export const onDeleteIncomingData = /* GraphQL */ `
  subscription OnDeleteIncomingData(
    $filter: ModelSubscriptionIncomingDataFilterInput
    $clientId: String
  ) {
    onDeleteIncomingData(filter: $filter, clientId: $clientId) {
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
export const onCreateUserDeviceMapping = /* GraphQL */ `
  subscription OnCreateUserDeviceMapping(
    $filter: ModelSubscriptionUserDeviceMappingFilterInput
  ) {
    onCreateUserDeviceMapping(filter: $filter) {
      clientId
      deviceIds
      timestamp
      updatedAt
    }
  }
`;
export const onUpdateUserDeviceMapping = /* GraphQL */ `
  subscription OnUpdateUserDeviceMapping(
    $filter: ModelSubscriptionUserDeviceMappingFilterInput
  ) {
    onUpdateUserDeviceMapping(filter: $filter) {
      clientId
      deviceIds
      timestamp
      updatedAt
    }
  }
`;
export const onDeleteUserDeviceMapping = /* GraphQL */ `
  subscription OnDeleteUserDeviceMapping(
    $filter: ModelSubscriptionUserDeviceMappingFilterInput
  ) {
    onDeleteUserDeviceMapping(filter: $filter) {
      clientId
      deviceIds
      timestamp
      updatedAt
    }
  }
`;
