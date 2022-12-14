import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Sidebar.css';
import { faBars, faBookAtlas, faBuildingUser, faChartBar, faChartColumn, faChartGantt, faColumns, faGear, faHome, faKaaba, faList, faList12, faListAlt, faListCheck, faListSquares, faListUl, faPeopleGroup, faPlus, faPlusSquare, faProjectDiagram, faSuitcase, faTableList, faUser } from '@fortawesome/free-solid-svg-icons';
import WebFont from 'webfontloader';

const Sidebar = () => {

  //font chu
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Chilanka']
      }
    })
  }, [])

  return (
    // side navbar

    <div className='side-navbar'>

      {/* side-bar-group */}
      <div className='side-bar-group'>

        <div className=' side-bar navbar-toggle'>
          <FontAwesomeIcon
            className='icon icon-menu menu-link'
            icon={faBars}
            size='lg'
          />
        </div>

        <div className='side-bar home-link'>
          <FontAwesomeIcon
            className='icon home-icon'
            icon={faHome}
            size='lg'
          />
          <a className='side-resp'>Home</a>
        </div>

        <div className='side-bar add-request-link'>
          <FontAwesomeIcon
            className='icon add-request-icon'
            icon={faPlusSquare}
            size='lg'
          />
          <a className='side-resp'>Add Request</a>
        </div>

        <div className='side-bar request-list-link '>
          <FontAwesomeIcon
            className='icon request-list-icon'
            icon={faTableList}
            size='lg'
          />
          <a className='side-resp'>Request List</a>
        </div>

        <div className='side-bar board-link'>
          <FontAwesomeIcon
            className='icon board-icon'
            icon={faColumns}
            size='lg'
          />
          <a className='side-resp'>Board</a>
        </div>

        <div className='side-bar gantt-chart-link'>
          <FontAwesomeIcon
            className='icon gantt-icon'
            icon={faChartGantt}
            size='lg'
          />
          <a className='side-resp'>Gantt Chart</a>
        </div>

        <div className='side-bar project-link'>
          <FontAwesomeIcon
            className='icon project-icon'
            icon={faSuitcase}
            size='lg'
          />
          <a className='side-resp'>Project</a>
        </div>

        <div className='side-bar uesr-list-link'>
          <FontAwesomeIcon
            className='icon user-list-icon'
            icon={faPeopleGroup}
            size='lg'
          />
          <a className='side-resp'>User Management</a>
        </div>

        <div className='side-bar departmetn-link'>
          <FontAwesomeIcon
            className='icon departmetn-icon'
            icon={faBuildingUser}
            size='lg'
          />
          <a className='side-resp'>Department Management</a>
        </div>

        <div className='side-bar department-link'>
          <FontAwesomeIcon
            className='icon department-icon'
            icon={faGear}
            size='lg'
          />
          <a className='side-resp'>Setting</a>
        </div>

      </div>

    </div>
  )
}

export default Sidebar
