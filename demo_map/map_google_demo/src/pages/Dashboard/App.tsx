import React from 'react'
import { Button } from '@material-ui/core'
import { mapConstructor } from '../../components/maps/MapConstructor/mapConstructor'

const App = () => {
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
  console.log('hello')
  return (
    <>
      <Button color='primary' variant="contained">Hello world!!!</Button>
      <div id='map' style={{ height: 800 }}></div>
    </>
  )
}

export default App