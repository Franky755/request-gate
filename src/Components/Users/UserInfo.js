import React, { useEffect } from 'react'
import './UserInfo.css'
import WebFont from 'webfontloader'

const UserInfo = (props) => {

    //font chu
    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Roboto', 'Chilanka']
        }
      })
    }, [])

  return (
    <div className='user-info-container'>
      <img
        className={props.className}
        src={props.avatar}
        width={props.width}
        height={props.height}
      >
      </img>
      <div className='detail-info'>
        <span className='user user-name'>{props.name}</span>
        <span className='user user-title'>{props.department}{props.title}</span>
        <span className='user user-email'>{props.email}</span>
        <span className='user user-status'>{props.status}</span>
      </div>

    </div>
  )
}

export default UserInfo
