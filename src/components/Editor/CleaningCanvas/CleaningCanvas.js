/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Divider } from 'antd'
import "./CleaningCanvas.scss"
import PropTypes from 'prop-types'

export default class CleaningCanvas extends Component {

  state = {}

  // static propTypes = {}
  // static defaultProps = {}

  // getDerivedStateFromProps = () => {}
  // componentDidMount = async () => {}
  // componentDidUpdate = () => {}
  // componentWillUnmount = () => {}

  // fnEventHandlerWithoutBind = (params) => (e) => {}
  // fnRegular = () => { this.setState((prevState, currProps) => ({})) }

  renderEditControls = () => {
    return (
      <div className='CleaningCanvas-controls-segment'>
        <button className="CleaningCanvas-control" aria-label="delete image">
          <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/material/30/000000/undo.png" />
          <label className="CleaningCanvas-control-label">UNDO</label>
        </button>
        <button className="CleaningCanvas-control" aria-label="restart image">
          <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/material/30/000000/redo.png" />
          <label className="CleaningCanvas-control-label">REDO</label>
        </button>
        <button className="CleaningCanvas-control" aria-label="save changes">
          <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/material/30/000000/erase.png" />
          <label className="CleaningCanvas-control-label">ERASER</label>
        </button>
        <button className="CleaningCanvas-control" aria-label="undo change">
          <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/material-two-tone/30/000000/states.png" />
          <label className="CleaningCanvas-control-label">SIZE</label>
        </button>
      </div>
    )
  }

  renderFileControls = () => {
    return (
      <div className='CleaningCanvas-controls-segment'>
        <button className="CleaningCanvas-control" aria-label="restart image">
          <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/ios/30/000000/restart-filled.png" />
          <label className="CleaningCanvas-control-label">RESTART</label>
        </button>
        <button className="CleaningCanvas-control" aria-label="restart image">
          <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/metro/30/000000/save.png" />
          <label className="CleaningCanvas-control-label">SAVE</label>
        </button>
        <button className="CleaningCanvas-control" aria-label="save changes">
          <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/ios-glyphs/30/000000/paper-plane.png" />
            <label className="CleaningCanvas-control-label">SUBMIT</label>
        </button>
      </div>
    )
  }

  render () {
    const { currentFile, editImage, resetImage, removeFromEdit } = this.props;
    return (
      <div id='CleaningCanvas'>
        <Divider style={{ height: '3px' }} />
        <div id="CleaningCanvas-controls-bar">
          {
            this.renderEditControls()
          }
          {
            this.renderFileControls()
          }
        </div>
        <Divider style={{ height: '3px' }} />
        <div id="CleaningCanvas-artboard">
          <img src={currentFile.url} style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    )
  }
};


//<button ariaLabel="remove image" className="img-thumb-delete"><i className="ion-close-round" />X</button>


// const mapStateToProps = (redux) => ({})
// const mapActionsToComponent = {}

// export default connect(mapStateToProps, mapActionsToComponent)(CleaningCanvas);
