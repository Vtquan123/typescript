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
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                color: "#444444"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
              {
                lightness: 0
              },
              {
                weight: 0.01
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [
              {
                saturation: 0
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [
              {
                lightness: 0
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
              {
                visibility: "off"
              }
            ]
          },
          // {
          //   "featureType": "road",
          //   "elementType": "all",
          //   "stylers": [
          //     {
          //       saturation: -100
          //     },
          //     {
          //       lightness: 45
          //     },
          //     {
          //       visibility: "simplified"
          //     }
          //   ]
          // },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                color: "#d2d2d2"
              },
              {
                weight: 1.00
              }
            ]
          },
          // {
          //   "featureType": "road",
          //   "elementType": "labels",
          //   "stylers": [
          //     {
          //       lightness: 0
          //     },
          //     {
          //       weight: 3.00
          //     }
          //   ]
          // },
          {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [
              {
                color: "#0f2739"
              },
              {
                weight: 2.00
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                color: "#fff"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                color: '#fde293'
              },
              {
                visibility: "on"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                color: '#fab10f'
              },
              {
                visibility: "on"
              }
            ]
          },
          // {
          //   "featureType": "road.highway",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       color: '#000'
          //     },
          //     {
          //       visibility: "on"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.highway",
          //   "elementType": "labels.text.stroke",
          //   "stylers": [
          //     {
          //       color: '#fff'
          //     },
          //     {
          //       visibility: "on"
          //     }
          //   ]
          // },
          {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
              {
                visibility: "on"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
              {
                visibility: "simplified"
              },
              {
                weight: 2.00
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              {
                visibility: "on"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
              {
                color: "#6aa5b1"
              },
              {
                visibility: "on"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
              {
                color: "#ffffff"
              },
              {
                visibility: "on"
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
