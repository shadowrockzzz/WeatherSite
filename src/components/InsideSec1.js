import React, { Component } from "react";

import "../componentCSS/section1.css";

export default class InsideSec1 extends Component {
  render() {
    let data = this.props.response.response.data;

    return (
      <div id="insideSec1">
        <div className="flex-item_image">
          <img
            onMouseDown={(e) => {
              e.target.parentNode.style.outlineColor = "#1a1a2a";
            }}
            onMouseUp={(e) => {
              e.target.parentNode.style.outlineColor = "";
            }}
            src={data.current.condition.icon}
            alt="Weather Image"
            onClick={this.props.handleSec4}
            className="Sec3Image"
          />
        </div>
        <div className="flex-item_insideSec1" id="first_item_insideSec1">
          <label className="sec4Label_insideSec1">Region</label>
          <label className="sec4Label_insideSec2">{data.location.region}</label>
        </div>
        <div className="flex-item_insideSec1">
          <label className="sec4Label_insideSec1">Country</label>
          <label className="sec4Label_insideSec2">
            {data.location.country}
          </label>
        </div>
        <div className="flex-item_insideSec1">
          <label className="sec4Label_insideSec1">Current Local Time</label>
          <label className="sec4Label_insideSec2">
            {data.location.localtime}
          </label>
        </div>
        <div className="flex-item_insideSec1">
          <label className="sec4Label_insideSec1">Feels Like</label>
          <label className="sec4Label_insideSec2">
            {data.current.feelslike_c} CelsiusDeg
          </label>
        </div>
        <div className="flex-item_insideSec1">
          <label className="sec4Label_insideSec1">Weather Condition</label>
          <label className="sec4Label_insideSec2">
            {data.current.condition.text}
          </label>
        </div>
      </div>
    );
  }
}
