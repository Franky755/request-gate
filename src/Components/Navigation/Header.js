import React, { useEffect } from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WebFont from 'webfontloader';
import { faBuilding, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import UserInfo from '../Users/UserInfo';


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

      {/* header left */}

      <div className='header-left'>
        <FontAwesomeIcon id='header-icon' className='icon icon-building' icon={faBuilding} />
        <div className="header-title"> Request Gate </div>
        <span className='space'>(REQUESTGATE)</span>
      </div>

      {/* header-right */}

      <div className='header-right'>

        {/* user status group */}
        <div className='user-status-group'>
          <UserInfo
            className='user-ava status-on status-resp'
            avatar='https://ss-images.saostar.vn/wp700/pc/1628984938979/saostar-px7jfa1omi8z2s1k.png'
          />
          <UserInfo
            className='user-ava status-on status-resp'
            avatar='https://vcdn1-giaitri.vnecdn.net/2019/08/11/sac-voc-tuoi-29-cua-nu-than-kpop-yoona-1565506935.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=vllizQS00hv7ZryBroU8FQ'
          />
          <button className='btn-gr-hidden'>
            +5
          </button>
          <button className='btn-invite-user'>+ Invite User</button>
        </div>
        <div className='split-line'></div>

        <form className='search-container'>
          <label></label>
          <FontAwesomeIcon className='icon icon-magnifying' icon={faMagnifyingGlass} size='sm' color='#60a3bc' />
          <input
            className='search-box search-user'
            type='text'
            placeholder='name or id?'
          ></input>
        </form>
      </div>

      {/* user dialog info */}


    </div>
  )
}

export default Header
