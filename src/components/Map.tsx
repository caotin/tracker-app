import React from 'react'
import { MapView } from '@aws-amplify/ui-react'
import { NavigationControl } from "react-map-gl";

export const Map = () => {

  return (
    <MapView
      initialViewState={{
        longitude: -115.17077150978058,
        latitude: 36.12309017212961,
        zoom: 15,
      }}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <NavigationControl position={"top-left"} />
    </MapView>
  )
}
