export const useMapMarker = (map: google.maps.Map, position: { lat: number, lng: number }) => {
  if (map) {
    return new google.maps.Marker({ position, map })
  }
}