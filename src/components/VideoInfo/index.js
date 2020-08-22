import React from 'react'

import avatar from '../../assets/images/avatar.jpg'
import thumbsUp from '../../assets/images/feather-icons/thumbs-up.svg'
import thumbsDown from '../../assets/images/feather-icons/thumbs-down.svg'
import share from '../../assets/images/material-ui/reply-24px.svg'
import save from '../../assets/images/feather-icons/plus-square.svg'
import more from '../../assets/images/feather-icons/more-horizontal.svg'



import './style.css'

function VideoInfo() {
  return (
    <div className="video-info-container">
      <header>
        <h2>Video Title</h2>
        <div className="info-strip">
          <div className="primary-info">
            <span>3,256 views • Mar 7, 2020</span>
          </div>
          <div className="primary-buttons">
            <div className="like">
              <img src={thumbsUp} className="icon"/>
              <span>3K</span>
            </div>
            <div className="dislike">
              <img src={thumbsDown} className="icon"/>
              <span>129K</span>
            </div>
            <div className="share">
              <img src={share} className="icon"/>
              <span>SHARE</span>
            </div>
            <div className="save">
              <img src={save} className="icon"/>
              <span>SAVE</span>
            </div>
            <div className="more">
              <img src={more} className="icon"/>
            </div>
          </div>
        </div>  
      </header>
      <section>
        <div className="owner-row">
          <div className="video-owner">
            <img src={avatar}/>
            <div className="text">
              <h3>viQcinese</h3>
              <span>11.5K subscribers</span>
            </div>            
          </div>
          <div className="subscribe">
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="video-description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam magni dolor ipsa dolorum possimus dicta. Quibusdam aut dolorem repellat! Modi consequuntur odio rem repudiandae quaerat, quasi iusto quidem ipsum.</p> 
        </div>
    
      </section>
    </div>
  )
}

export default VideoInfo