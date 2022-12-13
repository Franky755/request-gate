import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleQuestion, faEllipsis, faEye, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import UserInfo from './UserInfo';
import '../css/UserInfo.css';


const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='left-navbar'>
        <img src='https://static.vecteezy.com/system/resources/previews/008/329/474/original/dashboard-icon-style-free-vector.jpg' alt='dashboard' title='dashboard' height={40}></img>
        <a href='' alt='dashboard'>Dashboard</a>
        <a href='' alt='projects'>Projects</a>
        <a href='' alt='recently viewed'>Recently Viewed</a>
        <a href='' alt='filters'>Filters</a>
      </div>
      <div className='right-navbar'>
        <form>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <label>Search</label>
          <input></input>
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faEye} />
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faCircleQuestion} />
        </form>
        <UserInfo
          avatar='https://vcdn1-giaitri.vnecdn.net/2020/03/29/991816090-56782878-2.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=FalyTpb6BDBE3vFkujJ-TQ'
          height='40'
          name='Franky'
          title='Staff'
          department='Front-End'
        />
      </div>
    </div>
  )
}

export default Navbar
