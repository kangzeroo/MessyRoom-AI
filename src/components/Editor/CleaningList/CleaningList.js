/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react'
import StackGrid from "react-stack-grid";
import Dropzone from 'react-dropzone'
import { notification } from 'antd';
import "./CleaningList.scss";

const UploadTile = ({ onUploadImages }) => {
  return (
      <Dropzone onDrop={onUploadImages}>
        {
          ({getRootProps, getInputProps}) => (
            <section id="UploadTile">
              <div className="img-upload-tile tile" {...getRootProps()}>
                <input {...getInputProps()} />
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="96" height="96"
                  viewBox="0 0 192 192"
                  style={{fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#000000"><path d="M149.64,64.032c-6.928,-23.584 -28.44,-40.032 -53.64,-40.032c-18.336,0 -35.52,9.104 -45.936,24.04c-30.224,1.112 -53.944,28.136 -49.536,59.464c3.648,25.904 27.032,44.496 53.184,44.496h18.288h16v-48h-16.696h-0.624c-2.976,0 -4.464,-3.592 -2.36,-5.696l25.32,-25.32c1.304,-1.304 3.416,-1.304 4.72,0l25.32,25.32c2.104,2.104 0.616,5.696 -2.36,5.696h-0.624h-16.696v48h16h26.128c22.728,0 43.096,-16.424 45.6,-39.008c2.864,-25.928 -16.952,-48.04 -42.088,-48.96z"></path></g></g></svg>
              </div>
            </section>
          )
        }
      </Dropzone>
  )
}

const CleaningList = ({ fileList, currentFile, onUploadImages, setCurrentFile, onRemoveFile }) => {

  const renderOverlay = (file) => {
    if (file.status === 'predicting') {
      return (
        <div className="img-thumb-overlay">
          <div className="img-thumb-predicting"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      )
    }
    if (file.status === 'uploading') {
      return (
        <div className="img-thumb-overlay">
          <div className="img-thumb-uploading"><div></div><div></div><div></div><div></div></div>
        </div>
      )
    }
    if (file.status === 'complete') {
      return (
        <div className="img-thumb-overlay">
          <img src="https://img.icons8.com/color/48/000000/ok.png" className="img-thumb-complete" />
        </div>
      )
    }
    if (file.status === 'error') {
      return (
        <div className="img-thumb-overlay">
          <img src="https://img.icons8.com/color/48/000000/error.png" className="img-thumb-error" />
        </div>
      )
    }
  }

  const onClickImage = (status, file) => (e) => {
    console.log(file)
    setCurrentFile(file)
    if (status === 'uploading') {
      const args = {
        message: (<b>Upload in progress...</b>),
        duration: 3,
      }
      notification.open(args)
    }
    if (status === 'error') {
      const args = {
        message: (<b>AN ERROR OCCURED</b>),
        duration: 10,
      }
      notification.open(args)
    }
    if (status === 'predicting') {
      const args = {
        message: (<b>Drawing in progress...</b>),
        duration: 3,
      }
      notification.open(args)
    }
  }

  let colWidth = 150
  let gutterWidth = 15
  let gutterHeight = 15

  return (
      <div id="CleaningList">
        <StackGrid
          className="LandingGallery-StackGrid"
          columnWidth={colWidth}
          gutterWidth={gutterWidth}
          gutterHeight={gutterHeight}
          monitorImagesLoaded
        >
          <UploadTile className="tile" onUploadImages={onUploadImages} />
          {
            fileList.map(file => (
              <div key={file.uid} className="img-tile" onClick={onClickImage(file.status, file)}>
                <div className={`
                  img-thumb-container
                  tile
                  ${currentFile.uid === file.uid ? 'img-thumb-selected ' : ''}
                `}>
                  <img src={file.url} className="img-thumb" />
                  {
                    renderOverlay(file)
                  }
                  <button className="img-thumb-remove" onClick={(e) => onRemoveFile(e, file)} ariaLabel="remove image">
                    <img src="https://img.icons8.com/flat_round/25/000000/delete-sign.png" />
                  </button>
                </div>
              </div>
            ))
          }
        </StackGrid>
      </div>
  )
}

export default CleaningList;
