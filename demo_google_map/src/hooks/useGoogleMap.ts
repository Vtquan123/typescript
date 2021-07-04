import { useState, useEffect, useRef } from 'react'
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader'

const apiKey = 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU'

export interface MapProps {
  zoom: number
  center: {
    lat: number,
    lng: number,
  }
  additionalOptions?: LoaderOptions
}


export const useGoogleMap = <T extends HTMLElement>({ zoom, center, additionalOptions, ...props }: MapProps) => {
  const [mapState, setMapState] = useState<{loading: boolean, map?:google.maps.Map}>({ loading: true })
  const mapRef = useRef<T>(null)

  const loader = new Loader({
    apiKey: apiKey,
    ...additionalOptions,
  })

  useEffect(() => {
    loader.load().then(()=>{
      const map = new google.maps.Map(mapRef.current as T, {
        zoom,
        center,
        ...props
      })
      setMapState({loading: false, map:map})
    })
  }, [mapRef.current, center, zoom,])
  return {mapRef, ...mapState}
}
