/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LandingGallery.scss';
import { withSize } from 'react-sizeme'
import StackGrid from "react-stack-grid";

/** <LandingGallery>
 *
 *
**/
class LandingGallery extends Component {

  static propTypes = {
    gallery: PropTypes.array.isRequired,
    size: PropTypes.object.isRequired,
  }

  toggleBetweenImages = (gal, id) => (e) => {
    console.log('---- dirty ----')
    const x = document.getElementById(id)
    if (x.src === gal.messy_image) {
      x.setAttribute('src', gal.clean_image);
    } else if (x.src === gal.clean_image) {
      x.setAttribute('src', gal.messy_image);
    }
  }

  render () {
    let colWidth = 300
    const { gallery } = this.props
    return (
      <div id="LandingGallery">
        <div id="LandingGallery-title">GALLERY</div>
        <StackGrid
          className="LandingGallery-StackGrid"
          columnWidth={colWidth}
          gutterWidth={15}
          gutterHeight={15}
          monitorImagesLoaded
        >
          {
            gallery.filter((gal, index) => {
              if (this.props.size.width > 700) {
                return true
              } else {
                return index < 4
              }
            }).map(gal => (
              <img
                id={`LandingGallery-StackGrid-img-${gal.id}`}
                key={gal.id}
                src={gal.clean_image}
                onMouseEnter={this.toggleBetweenImages(gal, `LandingGallery-StackGrid-img-${gal.id}`)}
                onClick={this.toggleBetweenImages(gal, `LandingGallery-StackGrid-img-${gal.id}`)}
                onMouseOut={this.toggleBetweenImages(gal, `LandingGallery-StackGrid-img-${gal.id}`)}
                className="LandingGallery-image"
                alt={gal.id}
              />
            ))
          }
        </StackGrid>
        <div style={{ width: '100vw', height: '50px' }}></div>
      </div>
    )
  }
}

export default withSize()(LandingGallery)
