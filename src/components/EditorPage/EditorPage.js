/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Editor from '../Editor/Editor'
import LandingHeader from '../LandingPage/LandingHeader/LandingHeader'
import LandingSideMenu from '../LandingPage/LandingSideMenu/LandingSideMenu'
import { toggleSideMenu } from '../../actions/system/system_actions'
import "./EditorPage.scss"

class EditorPage extends Component {

  componentDidMount() {
    const self = this
    document.addEventListener("scroll", function() {
      if (self.props.sideMenuToggle) {
        self.props.toggleSideMenu()
      }
    });
  }

  render() {
    return (
      <div id="EditorPage">
        {
          this.props.sideMenuToggle
          ?
          <LandingSideMenu />
          :
          null
        }
        <LandingHeader />
        <div style={{ width: '100vw', height: '100px' }} />
        <Editor />
      </div>
    )
  }
}

const mapStateToProps = (redux) => {
  return {
    sideMenuToggle: redux.system.sideMenuToggle,
  }
}
const mapActionsToComponent = {
  toggleSideMenu,
}

export default connect(mapStateToProps, mapActionsToComponent)(EditorPage)
