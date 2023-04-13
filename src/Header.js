import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ onMassDelete }) => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="title">
        {location.pathname !== '/add-product' && <h2>Product List</h2>}
      </div>
      <div className="btns-container">
        {location.pathname === '/' && (
          <>
            <Link to="/add-product">
              <button className="btn-add">Add</button>
            </Link>
            <button className="btn-mass-delete" onClick={onMassDelete}>
              Mass Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
