import React, { Component } from 'react'
import ShopWindow from '../../components/shop-window/shop-window'
import './home-page.css'

export default class HomePage extends Component {

  render() {
    return(
      <main className="home-main">
        <div>
          <iframe className="main-vid" src="https://www.youtube.com/embed/Xq7ibY2sp_Q"/>
          {/* <video className="main-vid" controls autoPlay>
            <source src="https://www.youtube.com/embed/watch?v=Xq7ibY2sp_Q"/>
          </video>
          <video className="main-vid" controls>
            <source src="https://www.youtube.com/watch?v=Xq7ibY2sp_Q" type="video/mp4"></source>
          </video> */}
          <ShopWindow/>
        </div>
      </main>
    )
  }
}
