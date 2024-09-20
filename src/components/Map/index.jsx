import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './style.css';

function MyMap() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} className="yv-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;
