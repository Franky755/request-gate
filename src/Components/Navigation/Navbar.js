import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBuilding, faCaretDown, faCirclePlus, faCircleQuestion, faEllipsis, faEye, faGrip, faList, faListDots, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import UserInfo from '../Users/UserInfo';
import './Navbar.css';


const Navbar = () => {
  return (
    // navbar
    <div className='navbar-container'>

      {/* left navbar */}

      <div className='left-navbar'>
        <FontAwesomeIcon className='icon icon-building' icon={faBuilding} size='lg' color='#60a3bc' />
        <FontAwesomeIcon className='icon icon-nav-links' icon={faList} size='lg' />
        <div className='nav-links'>
          <a className='nav-link' href='' alt='dashboard'>Dashboard</a>
          <a className='nav-link' href='' alt='projects'>Projects</a>
          <a className='nav-link' href='' alt='recently viewed'>Recently Viewed</a>
          <a className='nav-link' href='' alt='filters'>Filters</a>
        </div>
        <FontAwesomeIcon className='icon icon-circle-plus' icon={faCirclePlus} size='lg' color='#60a3bc' />
        <button className='btn btn-upgrade'>Upgrade</button>
      </div>


      {/* right navbar */}

      <div className='right-navbar'>
        <form className='search-container'>
          <label></label>
          <FontAwesomeIcon className='icon icon-magnifying' icon={faMagnifyingGlass} size='sm' color='#60a3bc' />
          <input
            className='search-box'
            type='text'
            placeholder='Search this place'
          ></input>
        </form>
        <div className='nav-icon-group'>
          <FontAwesomeIcon className='icon' icon={faEllipsis} size='lg' color='#60a3bc' />
          <FontAwesomeIcon className='icon icon-faeye' icon={faEye} size='lg' color='#60a3bc' />
          <FontAwesomeIcon className='icon icon-fabell' icon={faBell} size='lg' color='#60a3bc' />
          <FontAwesomeIcon className='icon icon-faquestion' icon={faCircleQuestion} size='lg' color='#60a3bc' />
        </div>
        <UserInfo
          className='user-info user-ava'
          avatar='https://vcdn1-giaitri.vnecdn.net/2020/03/29/991816090-56782878-2.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=FalyTpb6BDBE3vFkujJ-TQ'
        />
        <FontAwesomeIcon className='icon' icon={faCaretDown} size='lg' color='#60a3bc' />

        <div className='split-line'></div>

        <FontAwesomeIcon className='icon icon-building building-resp' icon={faBuilding} size='lg' color='#60a3bc' />
        {/* <button className='btn btn-NA'>NA</button> */}
        <FontAwesomeIcon className='icon icon-grip' icon={faGrip} size='lg' color='#60a3bc' />
      </div>
    </div>
  )
}

export default Navbar
