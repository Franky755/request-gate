import React, { useEffect } from 'react';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WebFont from 'webfontloader';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    //font chu
    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Roboto', 'Chilanka']
        }
      })
    }, [])

  return (
    <div className='header-container'>
      <FontAwesomeIcon className='icon icon-building' icon={faBuilding} />
      <div className="header-title"> Request Gate</div>
    </div>
  )
}

export default Header
