/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { Component, Fragment, } from 'react'
import ReactCompareImage from 'react-compare-image';
// import { connect } from 'react-redux'
import { Divider, Tooltip, Spin, Icon } from 'antd'
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

  renderCompletedControls = (currentFile) => {
    return (
      <div className='CleaningCanvas-controls-segment'>
        <Tooltip placement="topLeft" title="Leave the canvas" arrowPointAtCenter>
          <button className="CleaningCanvas-control" onClick={() => this.props.setCurrentFile({})} aria-label="cancel editing">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/material-outlined/30/000000/minimize-window.png" />
            <label className="CleaningCanvas-control-label">CLOSE</label>
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="The drawing meet expectations" arrowPointAtCenter>
          <button className="CleaningCanvas-control" aria-label="poor results">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/material-sharp/30/000000/thumbs-up.png" />
            <label className="CleaningCanvas-control-label">GOOD</label>
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="The drawing failed to meet expectations" arrowPointAtCenter>
          <button className="CleaningCanvas-control" aria-label="poor results">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/material-sharp/30/000000/thumbs-down.png" />
            <label className="CleaningCanvas-control-label">BAD</label>
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Restart from original image" arrowPointAtCenter>
          <button className="CleaningCanvas-control" onClick={() => this.props.restartDrawing(currentFile)} aria-label="restart image">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/ios/30/000000/restart-filled.png" />
            <label className="CleaningCanvas-control-label">RESTART</label>
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Download cleaned image" arrowPointAtCenter>
          <a href={currentFile.url} download={currentFile.name}>
            <button className="CleaningCanvas-control" aria-label="restart image">
              <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/metro/30/000000/save.png" />
              <label className="CleaningCanvas-control-label">DOWNLOAD</label>
            </button>
          </a>
        </Tooltip>
      </div>
    )
  }

  renderEditControls = () => {
    return (
      <div className='CleaningCanvas-controls-segment'>
        <Tooltip placement="topLeft" title="Undo the last action" arrowPointAtCenter>
          <button className="CleaningCanvas-control" aria-label="delete image">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/material/30/000000/undo.png" />
            <label className="CleaningCanvas-control-label">UNDO</label>
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Redo the last action" arrowPointAtCenter>
          <button className="CleaningCanvas-control" aria-label="restart image">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/material/30/000000/redo.png" />
            <label className="CleaningCanvas-control-label">REDO</label>
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Erase messy spots" arrowPointAtCenter>
          <button className="CleaningCanvas-control" aria-label="save changes">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/material/30/000000/erase.png" />
            <label className="CleaningCanvas-control-label">ERASER</label>
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Change the eraser size" arrowPointAtCenter>
          <button className="CleaningCanvas-control" aria-label="undo change">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/material-two-tone/30/000000/states.png" />
            <label className="CleaningCanvas-control-label">SIZE</label>
          </button>
        </Tooltip>
      </div>
    )
  }

  renderFileControls = (currentFile) => {
    return (
      <div className='CleaningCanvas-controls-segment'>
        <Tooltip placement="topLeft" title="Leave the canvas" arrowPointAtCenter>
          <button className="CleaningCanvas-control" onClick={() => this.props.setCurrentFile({})} aria-label="cancel editing">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/material-outlined/30/000000/minimize-window.png" />
            <label className="CleaningCanvas-control-label">CLOSE</label>
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Delete the original and edited image" arrowPointAtCenter>
          <button className="CleaningCanvas-control" onClick={(e) => this.props.onRemoveFile(e, currentFile)} aria-label="delete image">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/metro/30/000000/cancel.png" />
            <label className="CleaningCanvas-control-label">DELETE</label>
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Restart from original image" arrowPointAtCenter>
          <button className="CleaningCanvas-control" onClick={() => this.props.restartDrawing(currentFile)} aria-label="restart image">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/ios/30/000000/restart-filled.png" />
            <label className="CleaningCanvas-control-label">RESTART</label>
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Send image to be cleaned" arrowPointAtCenter>
          <button className="CleaningCanvas-control" onClick={(e) => this.props.submitImage(currentFile)} aria-label="save changes">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/ios-glyphs/30/000000/paper-plane.png" />
              <label className="CleaningCanvas-control-label">SUBMIT</label>
          </button>
        </Tooltip>
      </div>
    )
  }

  renderPredictingControls = () => {
    return (
      <div className='CleaningCanvas-controls-segment'>
        <Tooltip placement="topLeft" title="Leave the canvas" arrowPointAtCenter>
          <button className="CleaningCanvas-control" onClick={() => this.props.setCurrentFile({})} aria-label="close notification">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/material-outlined/30/000000/minimize-window.png" />
            <label className="CleaningCanvas-control-label">CLOSE</label>
          </button>
        </Tooltip>
      </div>
    )
  }

  renderLoadingControls = (currentFile) => {
    if (currentFile.status === 'predicting') {
      return (
        <Fragment>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center' }}>
            <Spin size="large" />
            <div style={{ width: "30px", height: "100%" }} />
            <b style={{ fontSize: "1.2rem" }}>DRAWING IMAGE...</b>
          </div>
          {
            this.renderPredictingControls()
          }
        </Fragment>
      )
    } else if (currentFile.status === 'complete') {
      return (
        <Fragment>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center' }}>
            <img src="https://img.icons8.com/color/70/000000/ok.png" />
            <div style={{ width: "30px", height: "100%" }} />
            <b style={{ fontSize: "1.2rem" }}>IMAGE DRAWN</b>
          </div>
          {
            this.renderCompletedControls(currentFile)
          }
        </Fragment>
      )
    } else if (currentFile.status === 'error') {
      return (
        <Fragment>
          <Icon type="warning" size="large" />
          <b>WARNING AN ERROR OCCURRED</b>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          {
            this.renderEditControls()
          }
          {
            this.renderFileControls(currentFile)
          }
        </Fragment>
      )
    }
  }

  renderArtboard = (currentFile) => {
    if (currentFile.status === 'complete') {
      return (
        <ReactCompareImage leftImage={currentFile.url} rightImage={currentFile.url} />
      )
    } else if (currentFile.status === 'predicting') {
      return null
    } else {
      return (
        <img src={currentFile.url} style={{ width: '100%', height: 'auto' }} />
      )
    }
  }

  render () {
    const { currentFile, restartDrawing, onRemoveFile, setCurrentFile, submitImage } = this.props;
    return (
      <div id='CleaningCanvas'>
        <Divider style={{ height: '3px' }} />
        <div id="CleaningCanvas-controls-bar">
          {
            this.renderLoadingControls(currentFile)
          }
        </div>
        <Divider style={{ height: '3px' }} />
        <div id="CleaningCanvas-artboard">
          {
            this.renderArtboard(currentFile)
          }
        </div>
      </div>
    )
  }
};


//<button ariaLabel="remove image" className="img-thumb-delete"><i className="ion-close-round" />X</button>


// const mapStateToProps = (redux) => ({})
// const mapActionsToComponent = {}

// export default connect(mapStateToProps, mapActionsToComponent)(CleaningCanvas);
