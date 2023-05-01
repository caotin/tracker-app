import { MapView } from '@aws-amplify/ui-react';
import { NavigationControl } from "react-map-gl";
import { GeofencesControl } from './geofences/GeofencesControl';
import { ProfileButton } from './profile/ProfileButton';
import { TrackerControl } from './tracking/TrackerControl';

export const Map = () => {

  return (
    <MapView
      initialViewState={{
        longitude: 108.2364958,
        latitude: 16.0482557,
        zoom: 15,
      }}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative"
      }}
    >
      <NavigationControl position={"top-left"} />
      <GeofencesControl />
      <TrackerControl />
      <ProfileButton />
    </MapView>
  )
}
