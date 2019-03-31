/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { Component, Fragment } from 'react'
import Dropzone from 'react-dropzone'
import uuid from 'uuid'
// import { connect } from 'react-redux'
import { Upload, Icon, Modal, Divider, notification } from 'antd';
import PropTypes from 'prop-types'
import CleaningList from './CleaningList/CleaningList'
import CleaningCanvas from './CleaningCanvas/CleaningCanvas'
import './Editor.scss'

const UploadBanner = ({ onUploadImages }) => {
  return (
    <Dropzone onDrop={onUploadImages}>
      {
        ({getRootProps, getInputProps}) => (
          <section id="UploadBanner">
            <div className="UploadBanner-dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="96" height="96"
                viewBox="0 0 192 192"
                style={{fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#000000"><path d="M149.64,64.032c-6.928,-23.584 -28.44,-40.032 -53.64,-40.032c-18.336,0 -35.52,9.104 -45.936,24.04c-30.224,1.112 -53.944,28.136 -49.536,59.464c3.648,25.904 27.032,44.496 53.184,44.496h18.288h16v-48h-16.696h-0.624c-2.976,0 -4.464,-3.592 -2.36,-5.696l25.32,-25.32c1.304,-1.304 3.416,-1.304 4.72,0l25.32,25.32c2.104,2.104 0.616,5.696 -2.36,5.696h-0.624h-16.696v48h16h26.128c22.728,0 43.096,-16.424 45.6,-39.008c2.864,-25.928 -16.952,-48.04 -42.088,-48.96z"></path></g></g></svg>
              UPLOAD IMAGES
            </div>
          </section>
        )
      }
    </Dropzone>
  )
}

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
    modal: {
      visible: false,
      id: '',
      data: null,
    },
    ...this.props.initialState,
  }

  onUploadImages = async (acceptedFiles) => {
     console.log(acceptedFiles)
     const self = this
     const addedImages = acceptedFiles.map(file => {
       const p = new Promise((res, rej) => {
         const reader = new FileReader()
         reader.onabort = () => console.log('file reading was aborted')
         reader.onerror = () => console.log('file reading has failed')
         reader.onload = () => {
            // Do whatever you want with the file contents
            const binaryStr = reader.result
            res({
              uid: uuid.v4(),
              name: file.name,
              status: 'uploading',
              url: 'data:image/jpeg;base64,' + btoa(binaryStr),
            })
         }
         const data = reader.readAsBinaryString(file)
       })
       return p
     })
     const x = Promise.all(addedImages)
                      .then(results => {
                        console.log(results)
                        self.setState((prevState, currProps) => ({
                          fileList: prevState.fileList.concat(results)
                        }))
                        setTimeout(() => {
                          self.setState((prevState, currProps) => {
                            const updatedCurrentFile = prevState.fileList.filter(f => f.uid === prevState.currentFile.uid)[0] || prevState.currentFile
                            return {
                              currentFile: { ...updatedCurrentFile, status: 'unedited' },
                              fileList: prevState.fileList.map(file => ({
                                ...file,
                                status: file.status === 'uploading' ? 'unedited' : file.status,
                              }))
                            }
                          })
                        }, 1000)
                      })
                      .catch(err => {
                        console.log(err)
                      })
  }

  submitImage = (file) => {
    console.log(file)
    this.setState((prevState, currProps) => {
      return {
        currentFile: {
          ...file,
          status: 'predicting',
        },
        fileList: prevState.fileList.map(f => ({
          ...f,
          status: f.uid === file.uid ? 'predicting' : f.status,
        }))
      }
    }, () => console.log(this.state))
    setTimeout(() => {
      this.setState((prevState, currProps) => {
        return {
          currentFile: prevState.currentFile.uid === file.uid ? {
            ...file,
            status: file.uid === file.uid ? 'complete' : file.status,
          } : prevState.currentFile,
          fileList: prevState.fileList.map(f => ({
            ...f,
            status: f.uid === file.uid ? 'complete' : f.status,
          }))
        }
      }, () => {
        const args = {
          message: (<b>Image Drawing Complete!</b>),
          duration: 3,
        }
        notification.open(args)
      })
    }, 2000)
  }

  restartDrawing = (file) => {
    this.setState((prevState, currProps) => ({
      modal: {
        visible: true,
        id: 'RESTART_DRAWING',
        data: file,
      }
    }))
  }

  onConfirmRestartDrawing = (file) => {
    console.log('restartDrawing', file)
    this.setState((prevState, currProps) => ({
      modal: { visible: false, id: '', data: null },
      currentFile: { ...file, status: 'unedited' },
      fileList: prevState.fileList.map(f => {
        return {
          ...f,
          status: f.uid === file.uid ? 'unedited' : f.status,
        }
      })
    }))
  }

  setCurrentFile = (file) => {
    this.setState((prevState, currProps) => ({
      currentFile: file,
    }))
  }

  onRemoveFile = (e, file) => {
    if (e) { e.stopPropagation() }
    this.setState((prevState, currProps) => ({
      modal: {
        visible: true,
        id: 'DELETE_IMAGE',
        data: file,
      }
    }))
  }

  onConfirmRemoveFile = (file) => {
    this.setState((prevState, currProps) => {
      let currentFile = prevState.currentFile
      if (prevState.currentFile.uid === file.uid) {
        currentFile = {}
      }
      return {
        currentFile,
        fileList: prevState.fileList.filter(f => f.uid !== file.uid),
        modal: { visible: false, id: '', data: null },
      }
    }, () => console.log(this.state))
  }

  renderModal = ({ visible, id, data }) => {
    const self = this;
    if (id === 'DELETE_IMAGE') {
      return (
        <Modal
          visible={visible}
          okText="Delete"
          okButtonProps={{ style: { backgroundColor: 'red' } }}
          onOk={() => self.onConfirmRemoveFile(data)}
          onCancel={() => self.setState({ modal: { visible: false, id: '', data: null } })}
        >
          <b>ARE YOU SURE YOU WANT TO DELETE THIS?</b>
        </Modal>
      )
    } else if (id === 'RESTART_DRAWING') {
      return (
        <Modal
          visible={visible}
          okText="Restart"
          okButtonProps={{ style: { backgroundColor: 'blue' } }}
          onOk={() => self.onConfirmRestartDrawing(data)}
          onCancel={() => self.setState({ modal: { visible: false, id: '', data: null } })}
        >
          <b>ARE YOU SURE YOU WANT TO RE-START?</b>
        </Modal>
      )
    } else {
      return null
    }
  }

  renderStatusIndicator = (status) => {
    console.log(status)
    if (status === '_____') {
      return (
        <div>STATUS INDICATOR</div>
      )
    }
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
            onUploadImages={this.onUploadImages}
            fileList={this.state.fileList}
            setCurrentFile={this.setCurrentFile}
            currentFile={this.state.currentFile}
            onRemoveFile={this.onRemoveFile}
          />
          :
          <UploadBanner
            onUploadImages={this.onUploadImages}
          />
        }
        {
          (
            this.state.currentFile.uid
            &&
            this.state.currentFile.status !== 'error'
            &&
            this.state.currentFile.status !== 'uploading'
          )
          ?
          <CleaningCanvas
            currentFile={this.state.currentFile}
            setCurrentFile={this.setCurrentFile}
            submitImage={this.submitImage}
            restartDrawing={this.restartDrawing}
            onRemoveFile={this.onRemoveFile}
          />
          :
          this.renderStatusIndicator(this.state.currentFile.status)
        }
        {
          this.renderModal(this.state.modal)
        }
      </div>
    )
  }
};

// const mapStateToProps = (redux) => ({})
// const mapActionsToComponent = {}

// export default connect(mapStateToProps, mapActionsToComponent)(Editor);
