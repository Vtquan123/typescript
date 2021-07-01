import React from 'react'
import { mapConstructor } from '../MapConstructor/mapConstructor'

const Map = () => {
  const mapProps = {
    containerId: 'map',
    coordinates: {
      lat: 0,
      lng: 0,
    },
    zoom: 2,
    additionalOptions: {
      apiKey: ''
    }
  }
  const map = mapConstructor(mapProps)
}

export default Map