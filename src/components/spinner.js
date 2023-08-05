import React, { Component } from 'react'
import loading from './Snake.gif'

export class spinner extends Component {
  render() {
    return (
      <div  className='text-center'>
        <img src={loading} alt="loading..." style={{width:'85px',height:'85px'}}/>
      </div>
    )
  }
}

export default spinner
