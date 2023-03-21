// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { GRAPHQL_AUTH_MODE, GraphQLSubscription } from '@aws-amplify/api';
import { API, Auth } from "aws-amplify";
import { useRef, useState } from "react";
import { Marker } from "react-map-gl";
import { OnUpdateIncomingDataSubscription, OnUpdateIncomingDataSubscriptionVariables } from '../../API';
import { onUpdateIncomingData } from '../../graphql/subscriptions';
import { TrackerButton } from "./TrackerButton";

interface IMarker {
  lat?: number
  lng?: number
}

export const TrackerControl = () => {
  const [marker, setMarker] = useState<IMarker | undefined>();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const subscriptionRef = useRef<any>();

  const handleSubscriptionToggle = async () => {
    const user = await Auth.currentAuthenticatedUser()
    console.log(user);

    if (!user?.attributes?.sub) return;
    if (isSubscribed) {
      if (subscriptionRef?.current) subscriptionRef?.current.unsubscribe();
      console.info("Unsubscribed from onUpdatePosition AppSync mutation");
      setIsSubscribed(false);
    } else {
      const variables: OnUpdateIncomingDataSubscriptionVariables = {
        clientId: user.attributes.sub
      }
      subscriptionRef.current = API.graphql<GraphQLSubscription<OnUpdateIncomingDataSubscription>>(
        // graphqlOperation(onUpdateIncomingData, variables, ),
        {
          query: onUpdateIncomingData,
          variables,
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        }
      ).subscribe({
        next: ({ value: { data } }: any) => {
          console.log(data);
          console.info("Subscribed to onUpdatePosition AppSync mutation");

          const { onUpdateIncomingData } = data;
          console.debug("Position updated", onUpdateIncomingData);
          const { latitude,
            longitude } = onUpdateIncomingData?.payload || {};
          setMarker({
            lng: longitude,
            lat: latitude,
          });
        },
        error: (err: any) => console.error(err),
      });
      setIsSubscribed(true);
    }
  };

  return (
    <>
      <TrackerButton
        onClick={handleSubscriptionToggle}
        isSubscribed={isSubscribed}
      />

      {marker ? (
        <Marker color="teal" latitude={marker.lat} longitude={marker.lng} />
      ) : null}
    </>
  );
};