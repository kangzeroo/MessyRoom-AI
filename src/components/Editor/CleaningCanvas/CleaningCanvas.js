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
import { Divider, Tooltip } from 'antd'
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

  renderRatingControls = () => {
    return (
      <div className='CleaningCanvas-controls-segment'>
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
      </div>
    )
  }

  renderCompletedControls = () => {
    return (
      <div className='CleaningCanvas-controls-segment'>
        <Tooltip placement="topLeft" title="Restart from original image" arrowPointAtCenter>
          <button className="CleaningCanvas-control" aria-label="restart image">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/ios/30/000000/restart-filled.png" />
            <label className="CleaningCanvas-control-label">RESTART</label>
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Download cleaned image" arrowPointAtCenter>
          <button className="CleaningCanvas-control" aria-label="restart image">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/metro/30/000000/save.png" />
            <label className="CleaningCanvas-control-label">DOWNLOAD</label>
          </button>
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

  renderFileControls = () => {
    return (
      <div className='CleaningCanvas-controls-segment'>
        <Tooltip placement="topLeft" title="Leave the canvas" arrowPointAtCenter>
          <button className="CleaningCanvas-control" aria-label="cancel editing">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png" />
            <label className="CleaningCanvas-control-label">CANCEL</label>
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Restart from original image" arrowPointAtCenter>
          <button className="CleaningCanvas-control" aria-label="restart image">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/ios/30/000000/restart-filled.png" />
            <label className="CleaningCanvas-control-label">RESTART</label>
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Send image to be cleaned" arrowPointAtCenter>
          <button className="CleaningCanvas-control" aria-label="save changes">
            <img className="CleaningCanvas-control-icon" src="https://img.icons8.com/ios-glyphs/30/000000/paper-plane.png" />
              <label className="CleaningCanvas-control-label">SUBMIT</label>
          </button>
        </Tooltip>
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
            currentFile.status === 'complete'
            ?
            <Fragment>
              {
                this.renderRatingControls()
              }
              {
                this.renderCompletedControls()
              }
            </Fragment>
            :
            <Fragment>
              {
                this.renderEditControls()
              }
              {
                this.renderFileControls()
              }
            </Fragment>
          }
        </div>
        <Divider style={{ height: '3px' }} />
        <div id="CleaningCanvas-artboard">
          {
            currentFile.status === 'complete'
            ?
            <ReactCompareImage leftImage={currentFile.url} rightImage={currentFile.url} />
            :
            <img src={currentFile.url} style={{ width: '100%', height: 'auto' }} />
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
