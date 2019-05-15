import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <div className="image avatar">
            <img src={avatar} alt="" />
          </div>
          <h1>
            <strong>Ruslan Bredikhin</strong> <br />
            SENIOR SOFTWARE ENGINEER <br />
            <i>Montreal, Canada</i>
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
