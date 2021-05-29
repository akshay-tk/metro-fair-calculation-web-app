import React, { Component } from 'react'
import './station.css'


class Station extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    if (this.props.type != "fare")
      this.props.updateStation(this.props.stopName, this.props.stopId, this.props.type)

  }

  render() {
    let stationClass = (this.props.activeElement == this.props.stopName) ? "stationWrapper clicked" : "stationWrapper";
    // console.log(this.state.items)
    return (
      <div className={stationClass} onClick={this.handleClick}>
        <div className="stationHeader">
          <h3>
            {this.props.stopName}</h3>
        </div>
        <div className="stationBody" >
          <div className="stationName">
            <p>stopId</p>
            <p>:</p>
            <p>{this.props.stopId}</p>

          </div>
          <div className="stationName">

            <p>Theme</p>
            <p>:</p>
            <p>Business</p>

          </div >
          <div className="stationName">
            <p>theme </p>
            <p>:</p>
            <p>details</p>

          </div>

        </div>

      </div>

    )
  }
}
export default Station;