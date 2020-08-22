import React from 'react'

import bell from '../../../../assets/images/feather-icons/bell.svg'

import './style.css'

function NotificationsMenu() {
  return (
    <div className="notifications-menu">
      <img src={bell} className="icon"/>
    </div>
  )
}

export default NotificationsMenu