/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Upload, Icon, Modal } from 'antd';
import PropTypes from 'prop-types'
import './Eraser.scss'

export default class Eraser extends Component {

  state = {
    ...this.props.initialState,
  }

  render () {
    return (
      <div id='Eraser'>
        <div className='editor-step-title'>
          Step 2: Edit Photos
        </div>

      </div>
    )
  }
};

// const mapStateToProps = (redux) => ({})
// const mapActionsToComponent = {}

// export default connect(mapStateToProps, mapActionsToComponent)(Eraser);
