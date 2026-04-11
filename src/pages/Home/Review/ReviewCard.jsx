import React, {  } from 'react';
import { TbQuote } from 'react-icons/tb';

const ReviewCard = ({review}) => {
  const {user_email,userName,user_photoURL,review:rev}=review;
  console.log(review);
  return (
    <div>
      <div className="card max-w-md w-full bg-base-100 shadow-md border border-gray-100 rounded-2xl p-6 md:p-8 font-sans mx-auto text-left">
      <div className="card-body p-0"> {/* DaisyUI card-body padding removed for full control */}
        
        {/* Quote Icon - Smaller and lighter color */}
        <div className="text-4xl md:text-5xl text-cyan-200/80 mb-4">
          <TbQuote /> 
        </div>

        {/* Testimonial Text - Font size slightly reduced */}
        <p className="text-lg md:text-xl font-normal leading-relaxed text-gray-700 mb-8">
       {rev}
        </p>

        {/* Dotted Divider - Subtle */}
        <div className="divider my-0 border-t border-dashed border-gray-300"></div>

        {/* Profile Section - Spacing reduced */}
        
        <div className="flex items-center gap-4 mt-8">
          {/* Circular Placeholder for Avatar - Scale down */}
          <div className="avatar">
           {user_photoURL && <img src={user_photoURL} alt={userName} />}
          </div>
          
          {/* Name and Title - Scale down */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              {userName}
            </h2>
            <p className="text-base md:text-lg text-gray-500 mt-0.5">
              {user_email}
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ReviewCard;