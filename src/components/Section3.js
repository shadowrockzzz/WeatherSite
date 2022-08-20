import React, { Component } from 'react';

import '../componentCSS/section3.css'

export default class Section3 extends Component {
  render() {
    let climateHourdict = this.props.response

    let ClimateHourList = climateHourdict[this.props.idForSec3].hour

    return (
      <div className="sec3Container">
          {ClimateHourList.map((data, limit =-1)=>{
            limit =limit+1;
              return (
                <div key={limit} className="Sec3ListItem">
                  <div className='Sec3ImageWrapper'>
                  <img onMouseDown={(e)=>{e.target.parentNode.style.outlineColor="#1a1a2a"}} onMouseUp={(e)=>{e.target.parentNode.style.outlineColor=""}} onClick={this.props.handleSec4} src={ClimateHourList[limit-1].condition.icon} alt="Weather Image" id={limit} className="Sec3Image"/>
                  </div>
                <p>
                {data.time}
              </p>
                </div>)
          
          })}
      </div>
  
    )
  }
}
