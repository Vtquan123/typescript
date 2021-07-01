import { Loader, LoaderOptions } from '@googlemaps/js-api-loader'
// import React from 'react'

export interface MapProps {
  containerId: string,
  coordinates: {
    lat: number,
    lng: number,
  }
  zoom: number,
  additionalOptions: LoaderOptions
}

export const mapConstructor = async ({ containerId, coordinates, zoom, additionalOptions }: MapProps) => {
  // let map: google.maps.Map

  const loader = new Loader({
    ...additionalOptions,
    apiKey: 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU',

  })

  return loader.load().then(() => {
    return new google.maps.Map(document.getElementById(containerId) as HTMLElement, {
      center: { lat: coordinates.lat, lng: coordinates.lng },
      zoom
    })
  })
  // return map
}
