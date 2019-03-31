/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Upload, Icon, Modal, Divider } from 'antd';
import PropTypes from 'prop-types'
import CleaningList from './CleaningList/CleaningList'
import CleaningCanvas from './CleaningCanvas/CleaningCanvas'
import './Editor.scss'

export default class Editor extends Component {

  state = {
    currentFile: {},
    fileList: [
      // {
      //   uid: '-1',
      //   name: 'xxx.png',
      //   modified: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      // }
    ],
    ...this.props.initialState,
  }

  selectForEdit = (file) => (e) => {
    this.setState((prevState, currProps) => ({
      currentFile: file,
    }))
  }

  removeFromEdit = () => {
    this.setState((prevState, currProps) => ({
      currentFile: {},
    }))
  }

  editImage = () => {
    console.log('editing image...')
  }

  resetImage = () => {
    console.log('resetting image...')
  }

  renderMessage = () => {
    return (
      <div>
        <Divider />
        {
          this.state.currentFile.uid
          ?
          null
          :
          <div className="Editor-status-message" style={{ backgroundColor: 'gray', color: 'white' }}>
            SELECT AN IMAGE
          </div>
        }
        {
          this.state.currentFile.status === 'uploading'
          ?
          <div className="Editor-status-message" style={{ backgroundColor: 'yellow', color: 'black' }}>
            UPLOADING IMAGE
          </div>
          :
          null
        }
        {
          this.state.currentFile.status === 'error'
          ?
          <div className="Editor-status-message" style={{ backgroundColor: 'red', color: 'white' }}>
            AN ERROR OCCURRED
            <button style={{ color: 'black', margin: '10px auto' }}>RESTART</button>
          </div>
          :
          null
        }
        {
          this.state.currentFile.status === 'predicting'
          ?
          <div className="Editor-status-message" style={{ backgroundColor: 'blue', color: 'white' }}>
            DRAWING IN IMAGE
          </div>
          :
          null
        }
      </div>
    )
  }

  render () {
    return (
      <div id='Editor'>
        <div id='Editor-title'>
          IMAGE EDITOR
        </div>
        <Divider />
        {
          this.state.fileList.length > 0
          ?
          <CleaningList
              fileList={this.state.fileList}
              selectForEdit={this.selectForEdit}
              currentFile={this.state.currentFile}
          />
          :
          <div className="Editor-status-message" style={{ backgroundColor: 'yellow', color: 'black' }}>
            Upload Some Images
            <button ariaLabel="upload images">UPLOAD</button>
          </div>
        }
        {
          (
            this.state.currentFile.uid
            &&
            this.state.currentFile.status !== 'error'
            &&
            this.state.currentFile.status !== 'predicting'
            &&
            this.state.currentFile.status !== 'uploading'
          )
          ?
          <CleaningCanvas
            currentFile={this.state.currentFile}
            editImage={this.editImage}
            resetImage={this.resetImage}
            removeFromEdit={this.removeFromEdit}
          />
          :
          this.renderMessage()
        }
      </div>
    )
  }
};

// const mapStateToProps = (redux) => ({})
// const mapActionsToComponent = {}

// export default connect(mapStateToProps, mapActionsToComponent)(Editor);
