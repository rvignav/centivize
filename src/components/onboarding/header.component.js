import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Header = ({ back }) => (
  <div className="container-fluid w-100 align-items-center d-flex">
    {back && (
      <button className="btn btn-secondary mt-3" onClick={back}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    )}
  </div>
);

export default Header;
