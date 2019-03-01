/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react';
import './LandingGallery.scss';
import StackGrid from "react-stack-grid";

/** <LandingGallery>
 *
 *
**/
export default ({ gallery }) => {
  return (
    <div id="LandingGallery">
      <div id="LandingGallery-title">GALLERY</div>
      <StackGrid
        columnWidth="25%"
        style={{ width: "90%" }}
      >
        {
          gallery.map(gal => (
            <div key={gal.id} className="LandingGallery-image-wrapper">
              <img src={gal.image} className="LandingGallery-image" alt={gal.id} />
            </div>
          ))
        }
      </StackGrid>
    </div>
  )
}
