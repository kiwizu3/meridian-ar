import React from 'react';

interface CardProps {
  name: string;
  title: string;
  position: string;
  image: string;
  height? :string;
}

const ManagementCard: React.FC<CardProps> = ({ name, title, position, image, height }) => {
  return (
    <div className={`rounded-lg text-center ${height ? height : 'min-h-[380px]'} bg-teal-600`}>
      <div className=" bg-[#d4a262] p-4 flex justify-center">
        <img src={image} alt="mgt team" className='h-[200px] w-auto object-cover' />
      </div>
      <div className='bg-teal-600 p-4'>
      <h2 className="text-white font-bold">{name}</h2>
      <p className="text-black">{title}</p>
      <p className="text-black">{position}</p>
      </div>
    </div>
  );
};

export default ManagementCard;