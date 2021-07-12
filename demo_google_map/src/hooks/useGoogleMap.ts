import { useState, useEffect, useRef } from 'react'
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader'

const apiKey = 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU'

export interface MapProps {
  zoom: number
  center: {
    lat: number,
    lng: number,
  }
  additionalOptions?: LoaderOptions,
  mapOption?: google.maps.MapOptions
}

const GLOBAL_MAP_BOUNDS = {
  north: 85,
  south: -85,
  west: -180,
  east: 180
}

export const useGoogleMap = <T extends HTMLElement>({ zoom, center, additionalOptions, mapOption }: MapProps) => {
  const [mapState, setMapState] = useState<{ loading: boolean, map?: google.maps.Map }>({ loading: true })
  const mapRef = useRef<T>(null)

  const loader = new Loader({
    apiKey: apiKey,
    libraries: ["geometry"],
    ...additionalOptions,
  })

  useEffect(() => {
    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current as T, {
        zoom,
        center,
        minZoom: 3,
        disableDefaultUI: true,
        restriction: {
          latLngBounds: GLOBAL_MAP_BOUNDS,
          strictBounds: true,
        },
        styles: [
          // {
          //   "featureType": "administrative",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       color: "#444444"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "landscape",
          //   "elementType": "all",
          //   "stylers": [
          //     {
          //       lightness: 0
          //     },
          //     {
          //       weight: 0.01
          //     }
          //   ]
          // },
          // {
          //   "featureType": "landscape.man_made",
          //   "elementType": "all",
          //   "stylers": [
          //     {
          //       saturation: 0
          //     }
          //   ]
          // },
          // {
          //   "featureType": "landscape.natural",
          //   "elementType": "all",
          //   "stylers": [
          //     {
          //       lightness: 0
          //     }
          //   ]
          // },
          // {
          //   "featureType": "poi",
          //   "elementType": "all",
          //   "stylers": [
          //     {
          //       visibility: "off"
          //     }
          //   ]
          // },
          // // {
          // //   "featureType": "road",
          // //   "elementType": "all",
          // //   "stylers": [
          // //     {
          // //       saturation: -100
          // //     },
          // //     {
          // //       lightness: 45
          // //     },
          // //     {
          // //       visibility: "simplified"
          // //     }
          // //   ]
          // // },
          // {
          //   "featureType": "road",
          //   "elementType": "geometry",
          //   "stylers": [
          //     {
          //       color: "#d2d2d2"
          //     },
          //     {
          //       weight: 1.00
          //     }
          //   ]
          // },
          // // {
          // //   "featureType": "road",
          // //   "elementType": "labels",
          // //   "stylers": [
          // //     {
          // //       lightness: 0
          // //     },
          // //     {
          // //       weight: 3.00
          // //     }
          // //   ]
          // // },
          // {
          //   "featureType": "road",
          //   "elementType": "labels.text",
          //   "stylers": [
          //     {
          //       color: "#0f2739"
          //     },
          //     {
          //       weight: 2.00
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road",
          //   "elementType": "labels.text.stroke",
          //   "stylers": [
          //     {
          //       color: "#fff"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.highway",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       color: '#fde293'
          //     },
          //     {
          //       visibility: "on"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.highway",
          //   "elementType": "geometry.stroke",
          //   "stylers": [
          //     {
          //       color: '#fab10f'
          //     },
          //     {
          //       visibility: "on"
          //     }
          //   ]
          // },
          // // {
          // //   "featureType": "road.highway",
          // //   "elementType": "labels.text.fill",
          // //   "stylers": [
          // //     {
          // //       color: '#000'
          // //     },
          // //     {
          // //       visibility: "on"
          // //     }
          // //   ]
          // // },
          // // {
          // //   "featureType": "road.highway",
          // //   "elementType": "labels.text.stroke",
          // //   "stylers": [
          // //     {
          // //       color: '#fff'
          // //     },
          // //     {
          // //       visibility: "on"
          // //     }
          // //   ]
          // // },
          // {
          //   "featureType": "road.arterial",
          //   "elementType": "labels.icon",
          //   "stylers": [
          //     {
          //       visibility: "on"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.local",
          //   "elementType": "all",
          //   "stylers": [
          //     {
          //       visibility: "simplified"
          //     },
          //     {
          //       weight: 2.00
          //     }
          //   ]
          // },
          // {
          //   "featureType": "transit",
          //   "elementType": "all",
          //   "stylers": [
          //     {
          //       visibility: "on"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "water",
          //   "elementType": "all",
          //   "stylers": [
          //     {
          //       color: "#6aa5b1"
          //     },
          //     {
          //       visibility: "on"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "water",
          //   "elementType": "labels.text",
          //   "stylers": [
          //     {
          //       color: "#ffffff"
          //     },
          //     {
          //       visibility: "on"
          //     }
          //   ]
          // }

          // UBER //
          // {
          //   "featureType": "administrative",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       "color": "#d6e2e6"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "administrative",
          //   "elementType": "geometry.stroke",
          //   "stylers": [
          //     {
          //       "color": "#cfd4d5"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "administrative",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#7492a8"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "administrative.neighborhood",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "lightness": 25
          //     }
          //   ]
          // },
          // {
          //   "featureType": "landscape.man_made",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       "color": "#dde2e3"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "landscape.man_made",
          //   "elementType": "geometry.stroke",
          //   "stylers": [
          //     {
          //       "color": "#cfd4d5"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "landscape.natural",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       "color": "#dde2e3"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "landscape.natural",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#7492a8"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "landscape.natural.terrain",
          //   "elementType": "all",
          //   "stylers": [
          //     {
          //       "visibility": "off"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "poi",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       "color": "#dde2e3"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "poi",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#588ca4"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "poi",
          //   "elementType": "labels.icon",
          //   "stylers": [
          //     {
          //       "saturation": -100
          //     },
          //     {
          //       "visibility": 'off'
          //     }
          //   ]
          // },
          // {
          //   "featureType": "poi.park",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       "color": "#a9de83"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "poi.park",
          //   "elementType": "geometry.stroke",
          //   "stylers": [
          //     {
          //       "color": "#bae6a1"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "poi.sports_complex",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       "color": "#c6e8b3"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "poi.sports_complex",
          //   "elementType": "geometry.stroke",
          //   "stylers": [
          //     {
          //       "color": "#bae6a1"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#41626b"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road",
          //   "elementType": "labels.icon",
          //   "stylers": [
          //     {
          //       "saturation": -45
          //     },
          //     {
          //       "lightness": 10
          //     },
          //     {
          //       "visibility": "on"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.highway",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       "color": "#c1d1d6"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.highway",
          //   "elementType": "geometry.stroke",
          //   "stylers": [
          //     {
          //       "color": "#a6b5bb"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.highway",
          //   "elementType": "labels.icon",
          //   "stylers": [
          //     {
          //       "visibility": "on"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.highway.controlled_access",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       "color": "#9fb6bd"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.arterial",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       "color": "#ffffff"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.local",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       "color": "#ffffff"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "transit",
          //   "elementType": "labels.icon",
          //   "stylers": [
          //     {
          //       "saturation": -70
          //     }
          //   ]
          // },
          // {
          //   "featureType": "transit.line",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       "color": "#b4cbd4"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "transit.line",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#588ca4"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "transit.station",
          //   "elementType": "all",
          //   "stylers": [
          //     {
          //       "visibility": "off"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "transit.station",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#008cb5"
          //     },
          //     {
          //       "visibility": "on"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "transit.station.airport",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       "saturation": -100
          //     },
          //     {
          //       "lightness": -5
          //     }
          //   ]
          // },
          // {
          //   "featureType": "water",
          //   "elementType": "geometry.fill",
          //   "stylers": [
          //     {
          //       "color": "#a6cbe3"
          //     }
          //   ]
          // }

          // Clean //
          {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#acdbb8"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#9cc0f9"
              }
            ]
          }
        ],
        ...mapOption
      })
      setMapState({ loading: false, map: map })
    })
  }, [])
  return { mapRef, ...mapState }
}
