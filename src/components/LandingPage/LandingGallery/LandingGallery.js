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

  componentDidMount () {
    window.resizeTo(550,550)
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
            gallery.map(gal => (
              <img key={gal.id} src={gal.image} className="LandingGallery-image" alt={gal.id} />
            ))
          }
        </StackGrid>
      </div>
    )
  }
}

export default withSize()(LandingGallery)
