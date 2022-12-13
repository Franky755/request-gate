import React from 'react';
import '../css/Navbar.css'

const UserInfo = (props) => {
  return (
    <div className='user-info'>
      <img
      className='user-avatar'
      src={props.avatar}
      title={props.title}
      width={props.width}
      height={props.height}
      ></img>
      <span className='user-name'>{props.name}</span>
      <span className='user-title'>{props.title}</span>
      <span className='user-department'>{props.department}</span>
      <span className='user-status'>{props.status}</span>
    </div>
  )
}

export default UserInfo
