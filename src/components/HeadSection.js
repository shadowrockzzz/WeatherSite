import React, { Component } from 'react'
import '../componentCSS/headsection.css'

export default class HeadSection extends Component {


  render() {
    return (
      <div className='headsection'>

        <div className='container-wrap-item'>
         <h2 id='companyHeading' onClick={this.props.headClick} style={{cursor:'pointer'}}>Weather Catalogue</h2>
        </div>
        <div className='headsection container-wrap-item'>
          <div className='list-items'>
            <h4  onClick={this.props.aboutClick} style={{cursor:'pointer'}}>
              ABOUT
            </h4>
          </div>
        </div>
      </div>
    )
  }
}
