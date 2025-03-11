'use client'

import { GoogleMap, LoadScript } from '@react-google-maps/api'
import React from 'react'

const containerStyle = {
  width: '100%',
  height: '380px',
}

const center = {
  lat: 40.7128,
  lng: -74.006,
}

export const MapContainer = () => {
  return (
    <LoadScript googleMapsApiKey={'AIzaSyDv2AHH4nkUMZXAjoHbpbT43CtvRAdoNa4'}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13} />
    </LoadScript>
  )
}
