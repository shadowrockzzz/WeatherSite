import React, { Component } from 'react'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import '../componentCSS/section3and4.css'


export default class Section3And4 extends Component {

    constructor(props){
        super(props)

        this.state={state1:""}

        
    }

    static getDerivedStateFromProps(props,state){
        
        if (props===""){

        }
        else{
            
            if (props.response.response===""){
                return ""
            }
            else{
                state.state1 = props.response.response.data.forecast.forecastday

                return state
               
            }
        }

        
        
    }


  render() {
      if (this.props.response.response===""){
          return("")
      }
      else{
        return (
            <div id='sec3Andsec4'>
            <Section3 response={this.state.state1} idForSec3={this.props.idForSec3} handleSec4 ={this.props.handleSec4}/>
            <Section4 response={this.state.state1} idForSec3={this.props.idForSec3} idForSec4={this.props.idForSec4} />
            </div>
          )
      }
  }
}
