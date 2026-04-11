import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router-dom';

const Coverage = () => {
  const position = [23.6850, 90.3563];
  const service_data = useLoaderData();
  const mapRef = useRef(null);
  const handleSearch = e=>{
    e.preventDefault();
    const location = e.target.location.value;
    const district = service_data.find( c=> c.district.toLowerCase().includes(location.toLowerCase()));

    if(district){
    const coord=[district.latitude, district.longitude];
      mapRef.current.flyTo(coord,15)
    }
  }

  return (
    <div className='my-10'>
      <div>
        <h1 className='text-2xl font-bold text-center'>We are available in 64 district </h1>
      </div>
      <div className='my-5'>
        {/* search */}
        <form onSubmit={handleSearch} >
          <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" name='location' placeholder="Search" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
        </form>
        
      </div>
      <div className='w-full 
      h-[500px] border-2'>
        <MapContainer center={position} zoom={7} scrollWheelZoom={false}
          className='h-[500px]'
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            service_data.map((service, index) => (<Marker
              key={index}
              position={[service.latitude, service.longitude]}>
              <Popup>
                <h1 className='text-xl font-bold'>{service.district}

                </h1>
                <h2>Service area: {service.covered_area.join(', ')}</h2>
              </Popup>
            </Marker>))
          }
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;