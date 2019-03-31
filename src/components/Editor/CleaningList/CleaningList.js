/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react'
import StackGrid from "react-stack-grid";
import "./CleaningList.scss";

const UploadTile = () => {
  return (
      <div className="img-upload-tile tile">
        <img src="https://img.icons8.com/ios-glyphs/90/000000/add-image.png" className="img-upload-tile-icon" />
      </div>
  )
}

const CleaningList = ({ fileList, selectForEdit, currentFile }) => {

  const renderOverlay = (file) => {
    if (file.status === 'predicting') {
      return (
        <div className={`
            img-thumb-overlay
            ${currentFile.uid === file.uid ? 'img-thumb-selected ' : ''}
          `}
        >
          <div class="img-thumb-predicting"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      )
    }
    if (file.status === 'uploading') {
      return (
        <div className={`
            img-thumb-overlay
            ${currentFile.uid === file.uid ? 'img-thumb-selected ' : ''}
          `}
        >
          <div className="img-thumb-uploading"><div></div><div></div><div></div><div></div></div>
        </div>
      )
    }
    if (file.status === 'complete') {
      return (
        <div className={`
            img-thumb-overlay
            ${currentFile.uid === file.uid ? 'img-thumb-selected ' : ''}
          `}
        >
          <img src="https://img.icons8.com/color/48/000000/ok.png" className="img-thumb-complete" />
        </div>
      )
    }
    if (file.status === 'error') {
      return (
        <div className={`
            img-thumb-overlay
            ${currentFile.uid === file.uid ? 'img-thumb-selected ' : ''}
          `}
        >
          <img src="https://img.icons8.com/color/48/000000/error.png" className="img-thumb-error" />
        </div>
      )
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
          <UploadTile className="tile" />
          {
            fileList.map(file => (
              <div key={file.uid} className="img-thumb-container tile" onClick={selectForEdit(file)}>
                <img src={file.url} className="img-thumb" />
                {
                  renderOverlay(file)
                }
                <button className="img-thumb-remove" onClick={() => console.log('DELETE PHOTO')} ariaLabel="remove image">
                  <img src="https://img.icons8.com/flat_round/25/000000/delete-sign.png" />
                </button>
              </div>
            ))
          }
        </StackGrid>
      </div>
  )
}

export default CleaningList;
