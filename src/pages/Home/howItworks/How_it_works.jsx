import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";


const How_it_works = () => {
  const details = [
    {
      id: 1,
      title: "Booking Pick & Drop a ",
      description: "From personal packages to business shipments — we deliver on time, every time.."
    },
    {
      id: 2,
      title: "Booking Cash On Delivery",
      description: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
      id: 3,
      title: "Delivery Hub",
      description: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description: "From personal packages to business shipments — we deliver on time, every time."
    },
  ]
  return (
    <div className='my-14'>
      <h1 className=' pl-5 mb-6 text-3xl font-bold text-secondary '> How It Works</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      {details.map((detail) => (
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <TbTruckDelivery size={50} />
            <h2 className="card-title text-secondary">{detail.title}</h2>
            <p>{detail.description}</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default How_it_works;