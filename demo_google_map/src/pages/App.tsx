import React from 'react'
import Map from '../components/Map/Map';

const App = () => {
  return <div>
    <Map
      zoom={12}
      center={
        {lat: 49.25967649392007,
        lng:-123.05073614181713}
      }
    />
  </div>
}

export default App
