import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './style.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Make sure Leaflet CSS is imported

// Import the marker images directly
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Override the default Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MyMap() {
  return (
    <MapContainer center={[53.46138814267899, -1.433956895690216]} zoom={13} className="my-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[53.46138814267899, -1.433956895690216]}>
        <Popup>
          Winnie Chinese Takeaway
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;
