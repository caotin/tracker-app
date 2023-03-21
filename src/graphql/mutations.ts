/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIncomingData = /* GraphQL */ `
  mutation CreateIncomingData(
    $input: CreateIncomingDataInput!
    $condition: ModelIncomingDataConditionInput
  ) {
    createIncomingData(input: $input, condition: $condition) {
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
export const updateIncomingData = /* GraphQL */ `
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
export const deleteIncomingData = /* GraphQL */ `
  mutation DeleteIncomingData(
    $input: DeleteIncomingDataInput!
    $condition: ModelIncomingDataConditionInput
  ) {
    deleteIncomingData(input: $input, condition: $condition) {
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
export const createUserDeviceMapping = /* GraphQL */ `
  mutation CreateUserDeviceMapping(
    $input: CreateUserDeviceMappingInput!
    $condition: ModelUserDeviceMappingConditionInput
  ) {
    createUserDeviceMapping(input: $input, condition: $condition) {
      clientId
      deviceIds
      timestamp
      updatedAt
    }
  }
`;
export const updateUserDeviceMapping = /* GraphQL */ `
  mutation UpdateUserDeviceMapping(
    $input: UpdateUserDeviceMappingInput!
    $condition: ModelUserDeviceMappingConditionInput
  ) {
    updateUserDeviceMapping(input: $input, condition: $condition) {
      clientId
      deviceIds
      timestamp
      updatedAt
    }
  }
`;
export const deleteUserDeviceMapping = /* GraphQL */ `
  mutation DeleteUserDeviceMapping(
    $input: DeleteUserDeviceMappingInput!
    $condition: ModelUserDeviceMappingConditionInput
  ) {
    deleteUserDeviceMapping(input: $input, condition: $condition) {
      clientId
      deviceIds
      timestamp
      updatedAt
    }
  }
`;
