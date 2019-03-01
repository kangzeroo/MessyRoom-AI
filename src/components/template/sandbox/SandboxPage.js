/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react'
import ReactCompareImage from 'react-compare-image';

export default ({}) => {
  const imageData = [
    {
      src: 'http://clipgoo.com/daut/as/f/c/circular-mirror-modern-room-interior-design-wallpaper-2688-hd-bedroom-28_interior-column-design_interior-design_interior-design-tips-what-is-major-online-degree-certification-designers-nyc-styles-home.jpg',
      title: 'Image 1'
    },
    {
      src: 'https://i.pinimg.com/originals/3e/9b/22/3e9b223951daf601b9cf652a218272e8.jpg',
      title: 'Image 2'
    }
  ];
  return (
    <div id="SandboxPage">
      <ReactCompareImage leftImage={imageData[0].src} rightImage={imageData[1].src} />
    </div>
  )
}
