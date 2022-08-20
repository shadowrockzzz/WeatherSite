import React, { Component } from 'react'
import '../componentCSS/aboutSection.css'

export default class AboutSection extends Component {
  render() {
    return (
      <div className='FullContainer2'>
       <div id='insideAboutContainer'>
       <div id='about' className='About_items'>
          <h2 id='about_head'>
          About Me
          </h2>
        </div>
        <div id='content' className='About_items'>
          <p className='paras'>
            Hi Everyone !!! Myself Sai , Just trying to create some sample websites.
          </p>
          <p className='paras'>
            I, myself trying to aspire to be a intuitive thinker . And I believe I am still climbing the ladder with adventures and positive thinking.
            I like watching Animes, and create strange things.

            Coming to the point, this website is only designed for educational purposes and right now it is still in testing phase.
            
            I know I need to improve on many things to make site looks much more beautiful and I am planning to do the same.



            The Weather values here mentioned are actual values and are taken from <a className='externalLinks' href='https://www.weatherapi.com/'><b>WeatherAPI</b></a>

             and the background picture is taken from <a className='externalLinks' href="https://www.freepik.com/free-vector/gradient-dynamic-blue-lines-background_15151445.htm"><b>Freepik</b></a>

          </p>
        </div>
       </div>
          
      </div>
    )
  }
}
