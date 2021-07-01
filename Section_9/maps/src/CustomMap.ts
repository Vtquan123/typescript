import { User } from './User'
import { Company } from './Company'
export interface Mappable {
  location: {
    lat: number,
    lng: number
  },
  markerContent(): string
  color: string
}
export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 16,
      center: {
        lat: 21.045665824959475,
        lng: 105.84317897364204
      }
    })
  }
  // Bad code
  // addUserMarker(user: User):void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     }
  //   })
  // }

  // addCompanyMarker(company: Company):void { 
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   })
  // }
  ///////////////////////////////////////

  // Better code
  // addMarker(mappable: User | Company){
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng
  //     }
  //   })
  // }

  // Best Solution
  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}