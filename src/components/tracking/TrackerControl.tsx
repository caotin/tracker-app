// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { GraphQLSubscription } from '@aws-amplify/api';
import { API } from "aws-amplify";
import { useRef, useState } from "react";
import { Marker } from "react-map-gl";
import { IncomingData, onUpdate } from "../../graphql/position";
import { TrackerButton } from "./TrackerButton";

interface IMarker {
  lat?: number
  lng?: number
}

export const TrackerControl = () => {
  const [marker, setMarker] = useState<IMarker | undefined>({ lat: 16.0482557, lng: 108.2364958 });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const subscriptionRef = useRef<any>();

  const handleSubscriptionToggle = () => {
    if (isSubscribed) {
      if (subscriptionRef?.current) subscriptionRef?.current.unsubscribe();
      console.info("Unsubscribed from onUpdatePosition AppSync mutation");
      setIsSubscribed(false);
    } else {
      subscriptionRef.current = API.graphql<GraphQLSubscription<IncomingData>>(
        onUpdate
      ).subscribe({
        next: ({ value: { data } }: any) => {
          const { onUpdateIncomingData } = data;
          console.debug("Position updated", onUpdateIncomingData);
          const { latitude,
            longitude } = onUpdateIncomingData?.payload || {};
          // Hub.dispatch("petUpdates", { data: { lng, lat } });
          setMarker({
            lng: longitude,
            lat: latitude,
          });
        },
        error: (err: any) => console.error(err),
      });
      console.info("Subscribed to onUpdatePosition AppSync mutation");
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