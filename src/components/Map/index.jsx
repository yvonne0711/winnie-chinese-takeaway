import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './style.css';

function MyMap() {
  return (
    <MapContainer center={[53.46138814267899, -1.433956895690216]} zoom={13} className="my-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[53.46138814267899, -1.433956895690216]}>
        <Popup>
          A pretty popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;
