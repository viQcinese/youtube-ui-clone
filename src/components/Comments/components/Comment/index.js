import React from 'react'

import more from '../../../../assets/images/feather-icons/more-vertical.svg'
import like from '../../../../assets/images/feather-icons/thumbs-up.svg'
import dislike from '../../../../assets/images/feather-icons/thumbs-down.svg'
import avatar from '../../../../assets/images/avatar.jpg'

import './style.css'

function Comment() {
  return (
    <div className="comment-container">
      <div className="comment-info">
        <div className="avatar">
          <img src={avatar}/>
        </div>
        <div className="info">
          <div className="primary-info">
            <strong>Bag of Knots</strong>
            <span>1 month ago</span>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum atque, ea fugit, expedita quo mollitia aliquam voluptate error nobis laborum voluptatum
            </p>  
          </div>
          <div className="actions">
            <div className="like">
              <img src={like} className="icon"/>
              <span>1.1K</span>
            </div>
            <div className="dislike">
              <img src={dislike} className="icon"/>
            </div>
            <div className="reply">
              <span>REPLY</span>
            </div>
          </div>
        </div>
      </div>
      <div className="more">
        <img src={more} className="icon"/>
      </div>
    </div>
  )
}

export default Comment