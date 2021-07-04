import React from 'react'
import { useGoogleMap, MapProps } from '../../hooks/useGoogleMap';
import MarkerClusterer from "@googlemaps/markerclustererplus"

const Map = ({ zoom, center, additionalOptions, mapOption }: MapProps) => {
  const { mapRef, loading, map } = useGoogleMap<HTMLDivElement>({ zoom, center, additionalOptions, mapOption })
  console.log(map)
  if (map) {
    const marker = new google.maps.Marker({
      position: center,
      map: map
    })
    const marker1 = new google.maps.Marker({
      position: {lat:49.259610739691574, lng: -123.0687063851476},
      map: map
    })
    const marker2 = new google.maps.Marker({
      position: {lat: 49.2292438599974, lng: -122.95138647122144},
      map: map
    })
    const marker3 = new google.maps.Marker({
      position: {lat: 49.23807162699124,  lng: -123.01921204646},
      map: map
    })
      // @ts-ignore MarkerClusterer defined via script
    new MarkerClusterer(map, {marker, marker1,marker2,marker3},{imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",})
  }
  return <div>
    <div ref={mapRef} style={{height: 600}}>
      <div>
        {loading && <span>LOADING ...</span>}
      </div>
    </div>
  </div>
}

export default Map
