/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { PureComponent } from 'react'
import uuid from "uuid";
import StackGrid from "react-stack-grid";

export default class SandboxPage extends PureComponent {

  state = {
    items: []
  }

  componentDidMount () {
    this.setState({
      items: [
        { id: "0" },
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" },
      ]
    })
  }

  addToItems = () => {
    this.setState({
      items: this.state.items.concat([{
        id: uuid.v4(),
      }])
    })
  }

  removeFromItems = (id) => (e) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    })
  }

  getRandomPic = () => "https://picsum.photos/200/300/?random"

  render () {
    return (
      <div id="SandboxPage" style={{ minHeight: '1000px' }}>
        <button onClick={this.addToItems}>Add</button>
        <StackGrid
          columnWidth={250}
          gutterWidth={5}
        >
          {/*
            this.state.items.map(item => (
              <div key={item.id} onClick={this.removeFromItems(item.id)} style={{ backgroundColor: 'black', color: 'white', padding: '5px', margin: '5px auto' }}>
                Item {item.id}
                <img src="https://picsum.photos/200/300/?random" />
              </div>
            ))
          */}
          {
            this.state.items.map(item => (
              <img key={item.id} src={this.getRandomPic()} style={{ margin: '10px auto' }} />
            ))
          }
        </StackGrid>
      </div>
    )
  }
}
