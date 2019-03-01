/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react'
import "./LandingPage.scss"
import { Card, Avatar } from 'antd'
import ReactCompareImage from 'react-compare-image';
import testimonials from '../../assets/testimonials.json'
import brands from '../../assets/brands.json'

/** <LandingPage>
 *
 *
**/
export default ({}) => {
  return (
    <div id="LandingPage">
      <div id="LandingPageGradient">
        <LandingHeader />
        <LandingDemo />
      </div>
      <LandingCaseStudies brands={brands} />
      <LandingTestimonials testimonials={testimonials} />
    </div>
  )
}

/** <LandingHeader>
 *
 *
**/
const LandingHeader = ({}) => {
  return (
    <div id="LandingHeader">
      <div id="LandingHeader-logo">MESSY ROOM</div>
      <div id="LandingHeader-nav">
        <div className="clickable-hoverable">Pricing</div>
        <div className="clickable-hoverable">FAQ</div>
        <div className="clickable-hoverable">API</div>
        <div className="clickable-hoverable">Login</div>
      </div>
    </div>
  )
}

/** <LandingDemo>
 *
 *
**/
const LandingDemo = ({}) => {
  const images = [
    'https://media3.s-nbcnews.com/i/newscms/2015_24/627596/messy-bed-room-stock-today-150612-tease_9cddc8f0c25fb59e827ab1f22adf0ddb.jpg',
    'https://i.pinimg.com/originals/3e/9b/22/3e9b223951daf601b9cf652a218272e8.jpg',
  ]
  return (
    <div id="LandingDemo">
      <div id="LandingDemo-title">
        <div id="LandingDemo-title-main">Fix <span id="LandingDemo-title-messy">Messy</span> Photos</div>
        <div id="LandingDemo-title-sub">
          With A.I. Perfect for busy renters and landlords.
        </div>
        <button id="LandingDemo-title-action" className="clickable-hoverable">GET STARTED</button>
      </div>
      <div id="LandingDemo-demo">
        <ReactCompareImage leftImage={images[0]} rightImage={images[1]} />
      </div>
      <div className="spacer"></div>
    </div>
  )
}

/** <LandingCaseStudies>
 *
 *
**/
const LandingCaseStudies = ({ brands }) => {
  return (
    <div id="LandingCaseStudies">
      <div id="LandingCaseStudies-title">CASE STUDIES</div>
      <div id="LandingCaseStudies-body">
        {
          brands.map(brand => (
            <div className="LandingCaseStudies-card-brand">
              <img className="LandingCaseStudies-brand" src={brand.logo} alt={brand.company} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

/** <LandingTestimonials>
 *
 *
**/
const LandingTestimonials = ({ testimonials }) => {
  return (
    <div id="LandingTestimonials">
      <div id="LandingTestimonials-title">⭐ &nbsp; Testimonials &nbsp; ⭐</div>
      <TestimonialRow testimonials={testimonials.slice(0,3)} />
      <TestimonialRow testimonials={testimonials.slice(3,6)} />
    </div>
  )
}

/** <TestimonialRow>
 *
 *
**/
const TestimonialRow = ({ testimonials }) => {
  return (
    <div id="TestimonialRow">
      <div id="TestimonialRow-carosel">
        {
          testimonials.map(profile => (
            <TestimonialCard profile={profile} />
          ))
        }
      </div>
      <div id="TestimonialRow-carosel-icon"></div>
    </div>
  )
}

/** <TestimonialCard>
 *
 *
**/
const TestimonialCard = ({ profile }) => {
  return (
    <Card key={profile.id} className="TestimonialCard" bordered>
      <Card.Meta className="TestimonialCard-quote" description={profile.quote} />
      <Card.Meta
        title={profile.author}
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        description={profile.company}
      />
    </Card>
  )
}
