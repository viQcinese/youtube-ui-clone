import React, { useEffect } from 'react'

import avatar from '../../../../assets/images/avatar.jpg'
import youtube from '../../../../assets/images/feather-icons/youtube.svg'
import user from '../../../../assets/images/feather-icons/user.svg'
import users from '../../../../assets/images/feather-icons/users.svg'
import dollarSign from '../../../../assets/images/feather-icons/dollar-sign.svg'
import moon from '../../../../assets/images/feather-icons/moon.svg'
import book from '../../../../assets/images/feather-icons/book.svg'
import logOut from '../../../../assets/images/feather-icons/log-out.svg'
import shield from '../../../../assets/images/feather-icons/shield.svg'
import globe from '../../../../assets/images/feather-icons/globe.svg'
import settings from '../../../../assets/images/feather-icons/settings.svg'
import helpCircle from '../../../../assets/images/feather-icons/help-circle.svg'
import messageSquare from '../../../../assets/images/feather-icons/message-square.svg'

import './style.css'

function UserMenu() {

  useEffect(() => {
    document.addEventListener('click', e => {
      const userMenuDropDown = document.querySelector(".user-menu .drop-down");

      if (userMenuDropDown.style.display !== "none") {
        userMenuDropDown.style.display = "none"
      } else {
        if (e.target.id === "user-menu-click") {
          userMenuDropDown.style.display = "flex"
        }
      }
    })
  }, [])

  return (
    <div className="user-menu">
      <img src={avatar} id="user-menu-click"/>
      <div className="drop-down">
        <div className="user-info">
          <img src={avatar}/>
          <div className="text">
            <strong>Vitor Senise</strong>
            <span>vitor.senise@gmail.com</span>
            <a href="#">Manage your Google Account</a>
          </div>
        </div>
        <hr/>
        <div className="options">
          <div className="your-channel">
            <img src={user} className="icon"/>
            <span>Your channel</span>
          </div>
          <div className="paid-memberships">
            <img src={dollarSign} className="icon"/>
            <span>Paid memberships</span>
          </div>
          <div className="youtube-studio">
            <img src={youtube} className="icon"/>
            <span>YouTube Studio</span>
          </div>
          <div className="switch-accountl">
            <img src={users} className="icon"/>
            <span>Switch account</span>
          </div>
          <div className="sign-out">
            <img src={logOut} className="icon"/>
            <span>Sign out</span>
          </div>
          <hr/>
          <div className="dark-theme">
            <img src={moon} className="icon"/>
            <span>Dark theme: Off</span>
          </div>
          <div className="language">
            <img src={book} className="icon"/>
            <span>Language: English</span>
          </div>
          <div className="location">
            <img src={globe} className="icon"/>
            <span>Location: Brazil</span>
          </div>
          <div className="settings">
            <img src={settings} className="icon"/>
            <span>Settings</span>
          </div>
          <div className="your-data">
            <img src={shield} className="icon"/>
            <span>Your data in YouTube</span>
          </div>
          <div className="help">
            <img src={helpCircle} className="icon"/>
            <span>Help</span>
          </div>
          <div className="send-feedback">
            <img src={messageSquare} className="icon"/>
            <span>Send feedback</span>
          </div>
          <hr/>
          <div className="restricted-mode">
            <span>Restricted Mode: Off</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu