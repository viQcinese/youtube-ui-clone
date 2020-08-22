import React, { useEffect} from 'react'

import UserMenu from './components/UserMenu'
import NotificationsMenu from './components/NotificationsMenu'
import AppsMenu from './components/AppsMenu'
import AddVideoMenu from './components/AddVideoMenu'
import MainMenu from './components/MainMenu'

import search from '../../assets/images/feather-icons/search.svg'
import arrowLeft from '../../assets/images/feather-icons/arrow-left.svg'
import logo from '../../assets/images/youtube-logo.png'

import './style.css'

function PageHeader() {

  useEffect(() => {
    window.addEventListener('resize', e => {
      if(e.target.innerWidth > 655) {
        document.querySelector('.logo-container').style.display = "flex"
        document.querySelector('.user-container').style.display = "flex"
        document.querySelector('.input-container').style.display = "flex"
      } else {
        document.querySelector('.input-container').style.display = "none"
      }
    })
  }, []) 

  function handleSearchCall() {
    document.querySelector('.logo-container').style.display = "none"
    document.querySelector('.user-container').style.display = "none"
    document.querySelector('.input-container').style.display = "flex"
    document.querySelector('.input-container input').focus()
  }

  function handleSearchBack() {
    document.querySelector('.logo-container').style.display = "flex"
    document.querySelector('.user-container').style.display = "flex"
    document.querySelector('.input-container').style.display = "none"
  }

  return (
    <header id="page-header-content">
      <div className="logo-container">
        <MainMenu />
        <img src={logo}/>
      </div>
      <div className="input-container">
        <div className="back" onClick={handleSearchBack}>
          <img src={arrowLeft} className="icon"/>
        </div>
        <input type="text" placeholder="Search"/>
        <button>
          <img src={search}/>
        </button>
      </div>
      <div className="user-container" onClick={handleSearchCall}>
        <div className="search-call">
          <img src={search}/>
        </div>
        <AddVideoMenu />
        <AppsMenu />
        <NotificationsMenu />
        <UserMenu />
      </div>
    </header>
  )
}

export default PageHeader