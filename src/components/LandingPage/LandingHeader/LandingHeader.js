/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withSize } from 'react-sizeme'
import { toggleSideMenu } from '../../../actions/system/system_actions'
import './LandingHeader.scss'


/** <LandingHeader>
 *
 *
**/
class LandingHeader extends Component {
  render() {
    if (this.props.size.width > 700) {
      return (
        <div id="LandingHeader">
          <div id="LandingHeader-logo">MESSY ROOM</div>
          <div id="LandingHeader-nav-container">
            <div id="LandingHeader-nav">
              <div className="clickable-hoverable"><Link to="/pricing" style={{ color: 'white' }}>Pricing</Link></div>
              <div className="clickable-hoverable"><Link to="/faq" style={{ color: 'white' }}>FAQ</Link></div>
              <div className="clickable-hoverable"><Link to="/api" style={{ color: 'white' }}>API</Link></div>
              <div className="clickable-hoverable"><Link to="/login" style={{ color: 'white' }}>Login</Link></div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div id="LandingHeader">
          <div id="LandingHeader-logo">
            <i className="ion-navicon-round" onClick={() => this.props.toggleSideMenu()} style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
          </div>
          <div id="LandingHeader-nav">
            <b>MESSY ROOM</b>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (redux) => {
  return {

  }
}
const mapActionsToComponent = {
  toggleSideMenu,
}
const connectHOC = connect(mapStateToProps, mapActionsToComponent)(LandingHeader);

export default withSize()(connectHOC)
