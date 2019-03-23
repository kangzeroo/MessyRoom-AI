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
          <div id="LandingHeader-logo">
            <Link to="/" style={{ color: 'white' }}>MESSY ROOM</Link>
          </div>
          <div id="LandingHeader-nav-container">
            <div id="LandingHeader-nav">
              <Link to="/pricing" style={{ color: 'white' }}><div className="clickable-hoverable">Pricing</div></Link>
              <Link to="/faq" style={{ color: 'white' }}><div className="clickable-hoverable">FAQ</div></Link>
              <Link to="/api" style={{ color: 'white' }}><div className="clickable-hoverable">API</div></Link>
              <Link to="/login" style={{ color: 'white' }}><div className="clickable-hoverable">Login</div></Link>
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
