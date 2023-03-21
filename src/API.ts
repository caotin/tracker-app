/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateIncomingDataInput = {
  deviceId: string,
  payload?: IncomingPayloadDataInput | null,
  clientId: string,
};

export type IncomingPayloadDataInput = {
  latitude?: number | null,
  longitude?: number | null,
};

export type ModelIncomingDataConditionInput = {
  clientId?: ModelStringInput | null,
  and?: Array< ModelIncomingDataConditionInput | null > | null,
  or?: Array< ModelIncomingDataConditionInput | null > | null,
  not?: ModelIncomingDataConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type IncomingData = {
  __typename: "IncomingData",
  deviceId: string,
  payload?: IncomingPayloadData | null,
  clientId: string,
  timestamp: string,
};

export type IncomingPayloadData = {
  __typename: "IncomingPayloadData",
  latitude?: number | null,
  longitude?: number | null,
};

export type UpdateIncomingDataInput = {
  deviceId: string,
  payload?: IncomingPayloadDataInput | null,
  clientId?: string | null,
};

export type DeleteIncomingDataInput = {
  deviceId: string,
};

export type CreateUserDeviceMappingInput = {
  clientId: string,
  deviceIds: Array< string >,
};

export type ModelUserDeviceMappingConditionInput = {
  deviceIds?: ModelStringInput | null,
  and?: Array< ModelUserDeviceMappingConditionInput | null > | null,
  or?: Array< ModelUserDeviceMappingConditionInput | null > | null,
  not?: ModelUserDeviceMappingConditionInput | null,
};

export type UserDeviceMapping = {
  __typename: "UserDeviceMapping",
  clientId: string,
  deviceIds: Array< string >,
  timestamp: string,
  updatedAt: string,
};

export type UpdateUserDeviceMappingInput = {
  clientId: string,
  deviceIds?: Array< string > | null,
};

export type DeleteUserDeviceMappingInput = {
  clientId: string,
};

export type ModelSubscriptionIncomingDataFilterInput = {
  deviceId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIncomingDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionIncomingDataFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelIncomingDataFilterInput = {
  deviceId?: ModelStringInput | null,
  clientId?: ModelStringInput | null,
  and?: Array< ModelIncomingDataFilterInput | null > | null,
  or?: Array< ModelIncomingDataFilterInput | null > | null,
  not?: ModelIncomingDataFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelIncomingDataConnection = {
  __typename: "ModelIncomingDataConnection",
  items:  Array<IncomingData | null >,
  nextToken?: string | null,
};

export type ModelUserDeviceMappingFilterInput = {
  clientId?: ModelStringInput | null,
  deviceIds?: ModelStringInput | null,
  and?: Array< ModelUserDeviceMappingFilterInput | null > | null,
  or?: Array< ModelUserDeviceMappingFilterInput | null > | null,
  not?: ModelUserDeviceMappingFilterInput | null,
};

export type ModelUserDeviceMappingConnection = {
  __typename: "ModelUserDeviceMappingConnection",
  items:  Array<UserDeviceMapping | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserDeviceMappingFilterInput = {
  clientId?: ModelSubscriptionStringInput | null,
  deviceIds?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserDeviceMappingFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserDeviceMappingFilterInput | null > | null,
};

export type CreateIncomingDataMutationVariables = {
  input: CreateIncomingDataInput,
  condition?: ModelIncomingDataConditionInput | null,
};

export type CreateIncomingDataMutation = {
  createIncomingData?:  {
    __typename: "IncomingData",
    deviceId: string,
    payload?:  {
      __typename: "IncomingPayloadData",
      latitude?: number | null,
      longitude?: number | null,
    } | null,
    clientId: string,
    timestamp: string,
  } | null,
};

export type UpdateIncomingDataMutationVariables = {
  input: UpdateIncomingDataInput,
  condition?: ModelIncomingDataConditionInput | null,
};

export type UpdateIncomingDataMutation = {
  updateIncomingData?:  {
    __typename: "IncomingData",
    deviceId: string,
    payload?:  {
      __typename: "IncomingPayloadData",
      latitude?: number | null,
      longitude?: number | null,
    } | null,
    clientId: string,
    timestamp: string,
  } | null,
};

export type DeleteIncomingDataMutationVariables = {
  input: DeleteIncomingDataInput,
  condition?: ModelIncomingDataConditionInput | null,
};

export type DeleteIncomingDataMutation = {
  deleteIncomingData?:  {
    __typename: "IncomingData",
    deviceId: string,
    payload?:  {
      __typename: "IncomingPayloadData",
      latitude?: number | null,
      longitude?: number | null,
    } | null,
    clientId: string,
    timestamp: string,
  } | null,
};

export type CreateUserDeviceMappingMutationVariables = {
  input: CreateUserDeviceMappingInput,
  condition?: ModelUserDeviceMappingConditionInput | null,
};

export type CreateUserDeviceMappingMutation = {
  createUserDeviceMapping?:  {
    __typename: "UserDeviceMapping",
    clientId: string,
    deviceIds: Array< string >,
    timestamp: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserDeviceMappingMutationVariables = {
  input: UpdateUserDeviceMappingInput,
  condition?: ModelUserDeviceMappingConditionInput | null,
};

export type UpdateUserDeviceMappingMutation = {
  updateUserDeviceMapping?:  {
    __typename: "UserDeviceMapping",
    clientId: string,
    deviceIds: Array< string >,
    timestamp: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserDeviceMappingMutationVariables = {
  input: DeleteUserDeviceMappingInput,
  condition?: ModelUserDeviceMappingConditionInput | null,
};

export type DeleteUserDeviceMappingMutation = {
  deleteUserDeviceMapping?:  {
    __typename: "UserDeviceMapping",
    clientId: string,
    deviceIds: Array< string >,
    timestamp: string,
    updatedAt: string,
  } | null,
};

export type onUpdateIncomingDataSubscriptionVariables = {
  filter?: ModelSubscriptionIncomingDataFilterInput | null,
  clientId?: string | null,
};

export type onUpdateIncomingDataSubscription = {
  onUpdateIncomingData?:  {
    __typename: "IncomingData",
    clientId: string,
    deviceId: string,
    timestamp: string,
    payload?:  {
      __typename: "IncomingPayloadData",
      latitude?: number | null,
      longitude?: number | null,
    } | null,
  } | null,
};

export type GetIncomingDataQueryVariables = {
  deviceId: string,
};

export type GetIncomingDataQuery = {
  getIncomingData?:  {
    __typename: "IncomingData",
    deviceId: string,
    payload?:  {
      __typename: "IncomingPayloadData",
      latitude?: number | null,
      longitude?: number | null,
    } | null,
    clientId: string,
    timestamp: string,
  } | null,
};

export type ListIncomingDataQueryVariables = {
  deviceId?: string | null,
  filter?: ModelIncomingDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListIncomingDataQuery = {
  listIncomingData?:  {
    __typename: "ModelIncomingDataConnection",
    items:  Array< {
      __typename: "IncomingData",
      deviceId: string,
      payload?:  {
        __typename: "IncomingPayloadData",
        latitude?: number | null,
        longitude?: number | null,
      } | null,
      clientId: string,
      timestamp: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserDeviceMappingQueryVariables = {
  clientId: string,
};

export type GetUserDeviceMappingQuery = {
  getUserDeviceMapping?:  {
    __typename: "UserDeviceMapping",
    clientId: string,
    deviceIds: Array< string >,
    timestamp: string,
    updatedAt: string,
  } | null,
};

export type ListUserDeviceMappingsQueryVariables = {
  clientId?: string | null,
  filter?: ModelUserDeviceMappingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserDeviceMappingsQuery = {
  listUserDeviceMappings?:  {
    __typename: "ModelUserDeviceMappingConnection",
    items:  Array< {
      __typename: "UserDeviceMapping",
      clientId: string,
      deviceIds: Array< string >,
      timestamp: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateIncomingDataSubscriptionVariables = {
  filter?: ModelSubscriptionIncomingDataFilterInput | null,
  clientId?: string | null,
};

export type OnCreateIncomingDataSubscription = {
  onCreateIncomingData?:  {
    __typename: "IncomingData",
    deviceId: string,
    payload?:  {
      __typename: "IncomingPayloadData",
      latitude?: number | null,
      longitude?: number | null,
    } | null,
    clientId: string,
    timestamp: string,
  } | null,
};

export type OnUpdateIncomingDataSubscriptionVariables = {
  filter?: ModelSubscriptionIncomingDataFilterInput | null,
  clientId?: string | null,
};

export type OnUpdateIncomingDataSubscription = {
  onUpdateIncomingData?:  {
    __typename: "IncomingData",
    deviceId: string,
    payload?:  {
      __typename: "IncomingPayloadData",
      latitude?: number | null,
      longitude?: number | null,
    } | null,
    clientId: string,
    timestamp: string,
  } | null,
};

export type OnDeleteIncomingDataSubscriptionVariables = {
  filter?: ModelSubscriptionIncomingDataFilterInput | null,
  clientId?: string | null,
};

export type OnDeleteIncomingDataSubscription = {
  onDeleteIncomingData?:  {
    __typename: "IncomingData",
    deviceId: string,
    payload?:  {
      __typename: "IncomingPayloadData",
      latitude?: number | null,
      longitude?: number | null,
    } | null,
    clientId: string,
    timestamp: string,
  } | null,
};

export type OnCreateUserDeviceMappingSubscriptionVariables = {
  filter?: ModelSubscriptionUserDeviceMappingFilterInput | null,
};

export type OnCreateUserDeviceMappingSubscription = {
  onCreateUserDeviceMapping?:  {
    __typename: "UserDeviceMapping",
    clientId: string,
    deviceIds: Array< string >,
    timestamp: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserDeviceMappingSubscriptionVariables = {
  filter?: ModelSubscriptionUserDeviceMappingFilterInput | null,
};

export type OnUpdateUserDeviceMappingSubscription = {
  onUpdateUserDeviceMapping?:  {
    __typename: "UserDeviceMapping",
    clientId: string,
    deviceIds: Array< string >,
    timestamp: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserDeviceMappingSubscriptionVariables = {
  filter?: ModelSubscriptionUserDeviceMappingFilterInput | null,
};

export type OnDeleteUserDeviceMappingSubscription = {
  onDeleteUserDeviceMapping?:  {
    __typename: "UserDeviceMapping",
    clientId: string,
    deviceIds: Array< string >,
    timestamp: string,
    updatedAt: string,
  } | null,
};
