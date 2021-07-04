import React from 'react'
import { useGoogleMap, MapProps } from '../../hooks/useGoogleMap';


const Map = ({ zoom, center, additionalOptions, ...props }: MapProps) => {
  const { mapRef, loading, map } = useGoogleMap<HTMLDivElement>({ zoom, center, additionalOptions })
  console.log(map)
  return <div>
    <div ref={mapRef} style={{height: 600}}>
      <div>
        {loading && <span>LOADING ...</span>}
      </div>
    </div>
  </div>
}

export default Map
