/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withSize } from 'react-sizeme'
import './LandingHeader.scss'


/** <LandingHeader>
 *
 *
**/
class LandingHeader extends Component {
  render() {
    console.log(this.props.size)
    if (this.props.size.width > 700) {
      return (
        <div id="LandingHeader">
          <div id="LandingHeader-logo">MESSY ROOM</div>
          <div id="LandingHeader-nav">
            <div className="clickable-hoverable"><Link to="/pricing" style={{ color: 'white' }}>Pricing</Link></div>
            <div className="clickable-hoverable"><Link to="/faq" style={{ color: 'white' }}>FAQ</Link></div>
            <div className="clickable-hoverable"><Link to="/api" style={{ color: 'white' }}>API</Link></div>
            <div className="clickable-hoverable"><Link to="/login" style={{ color: 'white' }}>Login</Link></div>
          </div>
        </div>
      )
    } else {
      return (
        <div id="LandingHeader">
          <div id="LandingHeader-logo">=</div>
          <div id="LandingHeader-nav">
            MESSY ROOM
          </div>
        </div>
      )
    }
  }
}

export default withSize()(LandingHeader)
