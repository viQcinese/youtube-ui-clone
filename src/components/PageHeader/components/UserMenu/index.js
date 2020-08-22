import React from 'react'

import avatar from '../../../../assets/images/avatar.jpg'

import './style.css'

function UserMenu() {
  return (
    <div className="user-menu">
      <img src={avatar}/>
    </div>
  )
}

export default UserMenu