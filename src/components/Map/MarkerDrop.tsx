import { Marker } from '@react-google-maps/api'
import { useState } from 'react'
import { ContactInfoWindow } from './ContactInfoWindow'
import type { IContact } from '&types/contact'

type props = {
  contact: IContact
  showInfoWindow: boolean
}

export function MarkerDrop({ contact, showInfoWindow }: props) {
  const [openInfoWindow, setopenInfoWindow] = useState(false)

  function handleInfoWindow() {
    if (showInfoWindow) {
      setopenInfoWindow(!openInfoWindow)
    }
  }

  return (
    <Marker
      position={{
        lat: Number(contact.address.geo.lat),
        lng: Number(contact.address.geo.lng)
      }}
      animation={google.maps.Animation?.DROP}
      zIndex={99}
      data-testid={'marker'}
      onClick={handleInfoWindow}
    >
      {openInfoWindow && (
        <ContactInfoWindow contact={contact} onCloseClick={handleInfoWindow} />
      )}
    </Marker>
  )
}
