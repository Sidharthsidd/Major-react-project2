import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src="https://m.media-amazon.com/images/I/A1Gvs0JwUtL.png"
        alt="Logo"
        style={{ width }}
        className="transition transform duration-500 ease-in-out hover:scale-110 hover:opacity-90"
      />
    </div>
  );
}

export default Logo;
