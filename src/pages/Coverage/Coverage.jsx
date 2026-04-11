import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Coverage = () => {
  const position = [23.6850, 90.3563];
  return (
    <div className='my-10'>
      <div>
        <h1 className='text-2xl font-bold text-center'>We are available in 64 district </h1>
      </div>
      <div className='my-5'>

      </div>
      <div className='w-full 
      h-[500px] border-2'>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}
        className='h-[500px]'
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;