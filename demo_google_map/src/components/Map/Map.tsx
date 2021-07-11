import React, { useRef } from 'react'
import { useGoogleMap, MapProps } from '../../hooks/useGoogleMap';
import store from '../../icon/store.svg'
// import MarkerClusterer from "@googlemaps/markerclustererplus"

type GmapCubicBezierProps = {
  latlng1: google.maps.LatLng,
  latlng2: google.maps.LatLng,
  latlng3: google.maps.LatLng,
  latlng4: google.maps.LatLng,
  resolution: number,
  map: google.maps.Map,
}

const roundedRect = (ctx: any, x: number, y: number, width: number, height: number, radius: number, arrow: boolean, arrowWidth?: number, arrowHeight?: number, rounded?: boolean) => {
  // ctx.beginPath();
  const roundedOffset = rounded ? 2 : 0

  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  if (arrow && arrowWidth && arrowHeight) {
    ctx.moveTo(x + width / 2 - arrowWidth, y + height - roundedOffset);
    ctx.lineTo(x + width / 2, y + height + arrowHeight);
    ctx.lineTo(x + width / 2 + arrowWidth, y + height - roundedOffset);
  }
  // ctx.fill();
};

const circle = (ctx: any, x: number, y: number, radius: number, startArc: number, endArc: number) => {
  ctx.arc(x,y,radius, startArc, endArc, true)
}

const Map = ({ zoom, center, additionalOptions, mapOption }: MapProps) => {
  const { mapRef, loading, map } = useGoogleMap<HTMLDivElement>({ zoom, center, additionalOptions, mapOption })
  console.log(map)
  const initZoomControl = () => {
    map!.controls[google.maps.ControlPosition.TOP_RIGHT].push(document.getElementById('zoomControl') as HTMLElement)
  }


  const driverImage = () => {
    const canvas = document.createElement('CANVAS') as HTMLCanvasElement
    canvas.height = 50
    canvas.width = 60
    const ctx = canvas.getContext('2d') as NonNullable<CanvasRenderingContext2D>
    const rect = new Path2D()
    roundedRect(rect, 0, 0, 60, 35, 17.5, true, 5, 5);
    ctx.fillStyle = '#160E4D'
    ctx.fill(rect)
    return canvas.toDataURL()
  }

    const node = () => {
      const canvas = document.createElement('CANVAS') as HTMLCanvasElement
      canvas.height = 20
      canvas.width = 20
      const ctx = canvas.getContext('2d') as NonNullable<CanvasRenderingContext2D>
      const node = new Path2D()
      circle(node, 10, 10, 6, 0, Math.PI * 2)
      ctx.strokeStyle = '#160E4D'
      ctx.lineWidth= 7
      ctx.stroke(node)
      return canvas.toDataURL()
  }

  const test = 5

  if (map) {
    // map.set('isFractionalZoomEnabled', 0.5)
    initZoomControl()
    const marker = new google.maps.Marker({
      position: center,
      map: map,
      label: {
        text: `x${test}`,
        color: 'white',
      },
      icon: {
        url: driverImage(),
        labelOrigin: new google.maps.Point(30, 17),
        anchor: new google.maps.Point(30, 45),
      },
      zIndex: 0,
    })
    const marker0 = new google.maps.Marker({
      position: center,
      map: map,
      icon: {
        url: node(),
        anchor: new google.maps.Point(10, 0),
      },
      zIndex: 1,
    })
        const marker1 = new google.maps.Marker({
      position: { lat: 49.269432796909385, lng: -123.069555841962},
      map: map,
      label: {
        text: `x${test}`,
        color: 'white',
      },
      icon: {
        url: driverImage(),
        labelOrigin: new google.maps.Point(30, 17),
        // anchor: new google.maps.Point(0, 0),
      },
      zIndex: 0,
    })
    const marker1x = new google.maps.Marker({
      position: { lat: 49.269432796909385, lng: -123.069555841962},
      map: map,
      icon: {
        url: node(),
        anchor: new google.maps.Point(13.5, 8),
      },
      zIndex: 1,
    })

            const marker3 = new google.maps.Marker({
      position: { lat: 49.217979030235945, lng: -123.0701168023345},
      map: map,
      label: {
        text: `x${test}`,
        color: 'white',
      },
      icon: {
        url: driverImage(),
        labelOrigin: new google.maps.Point(30, 17),
        // anchor: new google.maps.Point(0, 0),
      },
      zIndex: 0,
    })
    const marker3x = new google.maps.Marker({
      position: { lat: 49.217979030235945, lng: -123.0701168023345},
      map: map,
      icon: {
        url: node(),
        anchor: new google.maps.Point(13.5, 8),
      },
      zIndex: 1,
    })
    // const marker1 = new google.maps.Marker({
    //   position: { lat: 49.269432796909385, lng: -123.069555841962},
    //   map: map,
    //   draggable: true,
    // })
    const marker2 = new google.maps.Marker({
      position: { lat: 49.2292438599974, lng: -122.95138647122144 },
      map: map
    })
    // const marker3 = new google.maps.Marker({
    //   position: { lat: 49.217979030235945, lng: -123.0701168023345},
    //   map: map,
    //   draggable: true
    // })
    const marker4 = new google.maps.Marker({
      position: { lat: 30.35640041915142, lng: - 81.67468388895591 },
      map: map
    })


    ///////////// Curved polylines ////////////////
    // const Point = google.maps.Point
    // const Marker = google.maps.Marker
    // const latLng = google.maps.LatLng

    // let curvature = 0.5
    // let curveMarker: any

    // const updateCurveMarker = () => {
    //   let pos1 = marker1.getPosition()!
    //   let pos2 = marker3.getPosition()!
    //   let projection = map.getProjection()!
    //   let p1 = projection.fromLatLngToPoint(pos1)
    //   let p2 = projection.fromLatLngToPoint(pos2)

    //   let e = new Point(p2.x - p1.x, p2.y - p1.y)
    //   let m = new Point(e.x / 2, e.y / 2)
    //   let o = new Point(e.y, -e.x)
    //   let c = new Point(m.x + curvature * o.x, m.y + curvature * o.y)

    //   let pathDef = 'M 0,0 ' +
    //     'q ' + c.x + ',' + c.y + ' ' + e.x + ',' + e.y;

    //   let zoom = map.getZoom()
    //   let scale = 1 / (Math.pow(2, -zoom))

    //   let symbol = {
    //     path: pathDef,
    //     scale: scale,
    //     strokeWeight: 1,
    //     fillColor: 'none',
    //   }

    //   if (!curveMarker) {
    //     curveMarker = new Marker({
    //       position: pos1,
    //       clickable: false,
    //       icon: symbol,
    //       zIndex: 0,
    //       map: map
    //     })
    //   } else {
    //     curveMarker.setOptions({
    //       position: pos1,
    //       icon: symbol,
    //     })
    //   }
    // }

    // google.maps.event.addListener(map, 'projection_changed', updateCurveMarker)
    // google.maps.event.addListener(map, 'zoom_changed', updateCurveMarker)
    // google.maps.event.addListener(marker1, 'position_changed', updateCurveMarker)
    // google.maps.event.addListener(marker3, 'position_changed', updateCurveMarker)
    ///////////////////////////////////////////////

    // marker.addListener('click', () => {
    //   alert('Marker is clicked!')
    // })
    // marker.setIcon()


    ////////////////////////// Dashed Polyline ////////////////////////////
    let pos1 = marker1.getPosition()!
    let pos2 = marker3.getPosition()!
    let lineLength = google.maps.geometry.spherical.computeDistanceBetween(pos1, pos2)
    let lineHeading = google.maps.geometry.spherical.computeHeading(pos1, pos2)
    console.log(lineHeading, "line heading")
    let markerA = new google.maps.Marker({
      position: google.maps.geometry.spherical.computeOffset(pos1, lineLength / 2, lineHeading - 20),
      map: map,
      icon: {
        url: "https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle_blue.png",
        size: new google.maps.Size(10, 10),
        // anchor: new google.maps.Point(3.5, 3.5),
      }
    })
    let markerB = new google.maps.Marker({
      position: google.maps.geometry.spherical.computeOffset(pos2, lineLength / 3, -35),
      map: map,
      icon: {
        url: 'https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle_blue.png',
        size: new google.maps.Size(10, 10),
        // anchor: new google.maps.Point(10, 10)
      }
    })

    const GmapCubicBezier = function ({ latlng1, latlng2, latlng3, latlng4, resolution, map }: GmapCubicBezierProps) {
      let lat1 = latlng1.lat()
      let lng1 = latlng1.lng()
      let lat2 = latlng2.lat()
      let lng2 = latlng2.lng()
      let lat3 = latlng3.lat()
      let lng3 = latlng3.lng()
      let lat4 = latlng4.lat()
      let lng4 = latlng4.lng()

      let points = []
      const BQT1 = function (t: number) {
        return (1-t) * (1-t);
      }
      
      const BQT2 = function (t: number) {
        return 2 * (1-t)*t;
      }
      
      const BQT3 = function (t: number) {
        return t * t;
      }

      const B1 = function (t: number) {
        return t * t * t;
      }
      const B2 = function (t: number) {
        return 3 * t * t * (1 - t);
      }
      const B3 = function (t: number) {
        return 3 * t * (1 - t) * (1 - t);
      }
      const B4 = function (t: number) {
        return (1 - t) * (1 - t) * (1 - t);
      }
      const getBezier = function (C1: any, C2: any, C3: any, C4: any, percent: number) {
        let pos: any = {};
        // pos.x = C1.x * B1(percent) + C2.x * B2(percent) + C3.x * B3(percent) + C4.x * B4(percent);
        // pos.y = C1.y * B1(percent) + C2.y * B2(percent) + C3.y * B3(percent) + C4.y * B4(percent);
        pos.x = C1.x * BQT1(percent) + C2.x * BQT2(percent)  + C4.x * BQT3(percent);
        pos.y = C1.y * BQT1(percent) + C2.y * BQT2(percent) +  C4.y * BQT3(percent);
        return pos;
      }

      for (let i = 0; i <= 1.00; i += resolution) {
        points.push(getBezier({
          x: lat1,
          y: lng1,
        }, {
          x: lat2,
          y: lng2,
        }, {
          x: lat3,
          y: lng3,
        }, {
          x: lat4,
          y: lng4,
        }, i))
        i = Number(i.toFixed(2) )
      }

      let path = []
      for (let i = 0; i < points.length; i++) {
        path.push(new google.maps.LatLng(points[i].x, points[i].y))
      }


      let Line = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeOpacity: 0,
        icons: [{
          icon: {
            path:  'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 5,
          },
          offset: '0',
          repeat: '25px',
        }],
        strokeColor: '#160E4D',
      })

      Line.setMap(map)
      return Line
    }

    let curvedLine = GmapCubicBezier({ latlng1: pos1, latlng2: markerA.getPosition()!, latlng3: markerB.getPosition()!, latlng4: pos2, resolution: 0.01, map })
  }

  ///////////////////////////////////////////////////////////////////////

  const changeCenter = ({ lat, lng }: { lat: number, lng: number }) => {
    map?.panTo({ lat, lng })
    new google.maps.Marker({ position: { lat, lng }, map: map })
  }

  // mapRef.current?.addEventListener('wheel', () => {
  //   zoomRange.current! += 0.1
  //   map?.setZoom(map?.getZoom()! + zoomRange.current!)
  // })

  return <div>
    <div ref={mapRef} style={{ height: 600, borderRadius: 20, overflow: 'hidden', marginBottom: 10 }}>
      <div>
        {loading && <span>LOADING ...</span>}
      </div>
    </div>
    {!loading && <div id="zoomControl">
      <button id="zoomInControl" onClick={() => {
        map?.setZoom(map?.getZoom()! + 1)
      }}>+</button>
      <button id="zoomOutControl" onClick={() => {
        map?.setZoom(map?.getZoom()! - 1)
      }}>-</button>
    </div>}
    <button onClick={() => changeCenter({ lat: 30.35640041915142, lng: - 81.67468388895591 })}>Change center</button>
  </div>
}

export default Map
