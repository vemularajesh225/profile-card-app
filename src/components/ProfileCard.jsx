import React from 'react';

const ProfileCard = ({ user }) => {
  if (!user) return null;

  const { picture, name, gender, phone } = user;

  return (
    <div className="flex flex-row items-center bg-white shadow-lg rounded-lg p-6 w-96 mx-auto border border-gray-200">
      {/* Image Section */}
      <div className="w-24 h-24">
        <img
          src={picture.large}
          alt={`${name.first} ${name.last}`}
          className="rounded-lg border border-gray-300"
        />
      </div>

      {/* Info Section */}
      <div className="ml-6">
        <h2 className="text-lg font-bold text-gray-800">{`${name.first} ${name.last}`}</h2>
        <p className="text-gray-600 capitalize">{gender}</p>
        <p className="text-gray-500">{phone}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
