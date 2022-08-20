
import '../componentCSS/section1.css'

import React, { Component } from 'react'
import InsideSec1 from './InsideSec1'

export class Section1 extends Component {
  
  render() {
    return (
        <div id='sec1'>
        <div>
            <label className='sec1_group_part' htmlFor='location' style={{width: "100%",position:"relative",display:"block",float:"left",justifyContent:'left'}}>
                City Name 
            </label>
            <input className='sec1_group_part' type="text" id='location' width='4' required/>
        </div>
        <button className='sec1_group_part' type='submit' onClick={this.props.func}>Click</button>
        {(this.props.response.response==="") ? <div></div> : <InsideSec1 response={this.props.response}></InsideSec1>}
    </div>
    )
  }
}

export default Section1



