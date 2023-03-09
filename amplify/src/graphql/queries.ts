/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIncomingData = /* GraphQL */ `
  query GetIncomingData($deviceId: String!) {
    getIncomingData(deviceId: $deviceId) {
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
export const listIncomingData = /* GraphQL */ `
  query ListIncomingData(
    $deviceId: String
    $filter: ModelIncomingDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listIncomingData(
      deviceId: $deviceId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        deviceId
        payload {
          latitude
          longitude
        }
        clientId
        timestamp
      }
      nextToken
    }
  }
`;
export const getUserDeviceMapping = /* GraphQL */ `
  query GetUserDeviceMapping($clientId: String!) {
    getUserDeviceMapping(clientId: $clientId) {
      clientId
      deviceIds
      timestamp
      updatedAt
    }
  }
`;
export const listUserDeviceMappings = /* GraphQL */ `
  query ListUserDeviceMappings(
    $clientId: String
    $filter: ModelUserDeviceMappingFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserDeviceMappings(
      clientId: $clientId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        clientId
        deviceIds
        timestamp
        updatedAt
      }
      nextToken
    }
  }
`;
