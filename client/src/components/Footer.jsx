import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        background: 'gray',
        color: 'white',
      }}
    >
      <div className="container">
        <footer className=" my-4">
          <p className="text-center ">&copy; Build By Deepak</p>
        </footer>
      </div>

      <div className="b-example-divider"></div>
    </div>
  );
};

export default Footer;
