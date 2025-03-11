'use client'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import React from 'react'

const containerStyle = {
  width: '100%',
  height: '380px',
}

const center = {
  lat: 29.126371811374966,
  lng: -81.00380330065285,
}

export const MapContainer = () => {
  return (
    <LoadScript googleMapsApiKey={'AIzaSyDv2AHH4nkUMZXAjoHbpbT43CtvRAdoNa4'}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}
