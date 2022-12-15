import React, { useEffect } from 'react'
import './UserDialog.css'
import UserInfo from './UserInfo'
import WebFont from 'webfontloader'

import { faBars, faBuildingUser, faChartGantt, faColumns, faGear, faHome, faKaaba, faList, faList12, faListAlt, faListCheck, faListSquares, faListUl, faPeopleGroup, faPlus, faPlusSquare, faProjectDiagram, faSignOut, faSuitcase, faTableList, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserDialog = () => {

    //font chu
    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Roboto', 'Chilanka']
        }
      })
    }, [])

  return (
    <div className='user-dialog-container'>
      <div className='user-info-box'>
        <UserInfo
          className='dialog-ava'
          avatar='https://vcdn1-giaitri.vnecdn.net/2020/03/29/991816090-56782878-2.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=FalyTpb6BDBE3vFkujJ-TQ'
          name='Franky'
          title='Staff'
          email='tranhiep.hust@gmail.com'
          department='Front-End'
          width='40'
        />
      </div>
      <div className='hori-line'></div>

      {/* info-dia-option-gr */}

      <div className='dia-gr'>

        <div className='dia-bar request-list-link '>
          <FontAwesomeIcon
            className='icon request-list-icon'
            icon={faTableList}
            size='lg'
          />
          <a className='dia-resp'>Your request</a>
        </div>

        <div className='dia-bar project-link'>
          <FontAwesomeIcon
            className='icon project-icon'
            icon={faSuitcase}
            size='lg'
          />
          <a className='dia-resp'>Your Project</a>
        </div>

        <div className='dia-bar board-link'>
          <FontAwesomeIcon
            className='icon board-icon'
            icon={faColumns}
            size='lg'
          />
          <a className='dia-resp'>Change password</a>
        </div>

        <div className='dia-bar gantt-chart-link'>
          <FontAwesomeIcon
            className='icon gantt-icon'
            icon={faChartGantt}
            size='lg'
          />
          <a className='dia-resp'>Edit profile</a>
        </div>


        <div className='dia-bar department-link'>
          <FontAwesomeIcon
            className='icon department-icon'
            icon={faGear}
            size='lg'
          />
          <a className='dia-resp'>Setting</a>
        </div>

        <div className='dia-bar project-link'>
          <FontAwesomeIcon
            className='icon project-icon'
            icon={faSignOut}
            size='lg'
          />
          <a className='dia-resp'>Sign out</a>
        </div>
      </div>


    </div>
  )
}

export default UserDialog
