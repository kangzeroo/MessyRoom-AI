/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react'
import ReactCompareImage from 'react-compare-image';
import { Link } from 'react-router-dom'
import './LandingDemo.scss'


/** <LandingDemo>
 *
 *
**/
export default ({}) => {
  const images = [
    'https://media3.s-nbcnews.com/i/newscms/2015_24/627596/messy-bed-room-stock-today-150612-tease_9cddc8f0c25fb59e827ab1f22adf0ddb.jpg',
    'https://i.pinimg.com/originals/3e/9b/22/3e9b223951daf601b9cf652a218272e8.jpg',
  ]
  return (
    <div id="LandingDemo">
      <div id="LandingDemo-title">
        <div id="LandingDemo-title-main">Fix <span id="LandingDemo-title-messy">Messy</span> Photos</div>
        <div id="LandingDemo-title-sub">
          Indoor Photography made easy with A.I.
        </div>
        <Link to="/editor" style={{ color: 'white' }}><button id="LandingDemo-title-action" className="clickable-hoverable" style={{ cursor: 'pointer' }}>LAUNCH EDITOR</button></Link>
      </div>
      <div id="LandingDemo-demo">
        <ReactCompareImage leftImage={images[0]} rightImage={images[1]} />
      </div>
      <div className="spacer"></div>
    </div>
  )
}
