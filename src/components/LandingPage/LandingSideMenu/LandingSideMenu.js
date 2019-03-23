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
import './LandingSideMenu.scss'
import { toggleSideMenu } from '../../../actions/system/system_actions'

class LandingSideMenu extends Component {

  state = {}

  // static propTypes = {}
  // static defaultProps = {}

  // getDerivedStateFromProps = () => {}
  // componentDidMount = async () => {}
  // componentDidUpdate = () => {}
  // componentWillUnmount = () => {}

  // fnEventHandlerWithoutBind = (params) => (e) => {}
  // fnRegular = () => { this.setState((prevState, currProps) => ({})) }

  render () {
    return (
      <div id='LandingSideMenu'>
        <div style={{ position: 'relative' }}>
          <div id="LandingSideMenu-shader" onClick={() => this.props.toggleSideMenu()}></div>
          <div id="LandingSideMenu-panel">
            <div id="LandingSideMenu-panel-title">MessyRoom</div>
            <div className="LandingSideMenu-panel-item"><Link to="/pricing" style={{ color: 'black' }}>Pricing</Link></div>
            <div className="LandingSideMenu-panel-item"><Link to="/faq" style={{ color: 'black' }}>FAQ</Link></div>
            <div className="LandingSideMenu-panel-item"><Link to="/api" style={{ color: 'black' }}>API</Link></div>
            <div className="LandingSideMenu-panel-item"><Link to="/login" style={{ color: 'black' }}>Login</Link></div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (redux) => {
  return {
    sideMenuToggle: redux.system.sideMenuToggle,
  }
}
const mapActionsToComponent = {
  toggleSideMenu,
}

export default connect(mapStateToProps, mapActionsToComponent)(LandingSideMenu);
