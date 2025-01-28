import React from 'react';

export default function Dashboard({ handleLogout }) {
  return (
    <div className='flex flex-col gap-5 items-center mt-10'>
      <h1 className='text-3xl font-bold'>Welcome to the Dashboard</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
        Logout
      </button>
    </div>
  );
}
