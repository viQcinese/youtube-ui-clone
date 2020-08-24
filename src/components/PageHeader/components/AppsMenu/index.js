import React, { useEffect } from 'react'

import grid from '../../../../assets/images/feather-icons/grid.svg'
import youtube from '../../../../assets/images/feather-icons/youtube.svg'

import './style.css'

function AppsMenu() {

  useEffect(() => {
    document.addEventListener('click', e => {
      const appsMenuDropDown = document.querySelector(".apps-menu .drop-down");
      const appsMenuAfter = document.querySelector(".apps-menu .after");

      if (appsMenuDropDown.style.display !== "none") {
        appsMenuDropDown.style.display = "none"
        appsMenuAfter.style.display = "flex"
      } else {
        if (e.target.id === "apps") {
          appsMenuDropDown.style.display = "flex"
          appsMenuAfter.style.display = "none"
        }
      }
    })
  }, [])

  return (
    <div className="apps-menu">
      <img src={grid} className="icon" id="apps"/>
      <div className="after">
        YouTube apps
      </div>
      <div className="drop-down">
        <div className="youtube-tv">
          <img src={youtube} className="icon" />
          <span>YouTube TV</span>
        </div>
        <hr/>
        <div className="youtube-music">
          <img src={youtube} className="icon"/>
          <span>YouTube Music</span>
        </div>
        <div className="youtube-kids">
          <img src={youtube} className="icon"/>
          <span>YouTube Kids</span>
        </div>
        <hr/>
        <div className="creator-academy">
          <img src={youtube} className="icon"/>
          <span>Creator Academy</span>
        </div><div className="youtube-for-artists">
          <img src={youtube} className="icon"/>
          <span>YouTube for Artists</span>
        </div>
      </div>
    </div>
  )
}

export default AppsMenu