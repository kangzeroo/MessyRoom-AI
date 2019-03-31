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
    }), () => console.log(this.state)
    )
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

  render () {
    return (
      <div id='Editor'>
        <div id='Editor-title'>
          IMAGE EDITOR
        </div>
        <Divider />
        <CleaningList
            fileList={this.state.fileList}
            selectForEdit={this.selectForEdit}
            currentFile={this.state.currentFile}
        />
        {
          this.state.currentFile.uid
          ?
          <CleaningCanvas
            currentFile={this.state.currentFile}
            editImage={this.editImage}
            resetImage={this.resetImage}
            removeFromEdit={this.removeFromEdit}
          />
          :
          null
        }
      </div>
    )
  }
};

// const mapStateToProps = (redux) => ({})
// const mapActionsToComponent = {}

// export default connect(mapStateToProps, mapActionsToComponent)(Editor);
