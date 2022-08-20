import "../componentCSS/section2.css";

import React, { Component } from "react";

export default class Section2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.response.response === "") {
      return <div></div>;
    } else {
      let forecastdata = this.props.response.response.data.forecast.forecastday;
      return (
        <div id="sec2">
          {forecastdata.map((data, key = 0) => {
            key += 1;
            let dateInstance = new Date(data.date);
            let number = dateInstance.getDay()
            let daysList=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
            return (
              <div id={key} key={key} className="sec2Item">
                <button
                  id={key}
                  className="button"
                  onClick={this.props.handleClickEventForSection3}
                  onMouseDown={(e)=>{e.target.style.backgroundColor="black"; e.target.style.color="white"}}
                  onMouseUp={(e)=>{e.target.style.backgroundColor=""; e.target.style.color=""}}
                >
                  {daysList[number]}
                </button>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
