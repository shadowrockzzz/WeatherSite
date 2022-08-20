import React, { Component } from 'react'
import '../componentCSS/section4.css'

export default class Section4 extends Component {

  render() {
    let climateHourdict = this.props.response

    let ClimateHourList = climateHourdict[this.props.idForSec3].hour

    return (
      <div className='sec4Container'>
        <div className='flex-column1'>
        <div className='flex-item'>
          <label className='sec4Label'>Condition</label>
          <div className='item-input'>{ClimateHourList[this.props.idForSec4].condition.text}</div>
        </div>
        <div className='flex-item'>
          <label className='sec4Label'>Day/Night</label>
          <div className='item-input'>{ClimateHourList[this.props.idForSec4].is_day ===0?"Night" : "Day"}</div>
        </div>
        <div className='flex-item'>
          <label className='sec4Label'>Rain Expectancy</label>
          <div className='item-input'>{ClimateHourList[this.props.idForSec4].chance_of_rain ===0?"No" : "Yes"}</div>
        </div>
        <div className='flex-item'>
          <label className='sec4Label'>Snow Expectancy</label>
          <div className='item-input'>{ClimateHourList[this.props.idForSec4].chance_of_snow ===0?"No" : "Yes"}</div>
        </div>
        <div className='flex-item'>
          <label className='sec4Label'>Feels Like</label>
          <div className='item-input'>{ClimateHourList[this.props.idForSec4].feelslike_c} CelsiusDeg</div>
        </div>


        </div>
        <div className='flex-column2'>
        <div className='flex-item'>
          <label className='sec4Label'>Gust speed</label>
          <div className='item-input'>{ClimateHourList[this.props.idForSec4].gust_kph} Kph</div>
        </div>
        <div className='flex-item'>
          <label className='sec4Label'>Average Heat Index</label>
          <div className='item-input'>{ClimateHourList[this.props.idForSec4].heatindex_c} CelsiusDeg</div>
        </div>
        <div className='flex-item'>
        <label className='sec4Label'>Average Temperature</label>
          <div className='item-input'>{ClimateHourList[this.props.idForSec4].temp_c} CelsiusDeg</div>
        </div>
        <div className='flex-item'>
        <label className='sec4Label'>Average Humidity</label>
          <div className='item-input'>{ClimateHourList[this.props.idForSec4].humidity}
          </div>
          <div className='flex-item'>
          <label className='sec4Label'>Wind Vector</label>
          <div className='item-input'>{ClimateHourList[this.props.idForSec4].wind_kph} kph {ClimateHourList[this.props.idForSec4].wind_dir} direction</div>
        </div>
          </div>
        </div>
        
        </div>
    )
  }
}
