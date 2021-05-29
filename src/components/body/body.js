import React, { Component } from 'react';
import Station from '../station/station'
import StationList from '../stationList/stationList'
import './body.css'
import Fare from '../fare/fare'

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departure: "",
            arrival: "",
            fareid: [{}],
            farename: [{}],
            price: ""
        };
        this.updateStation = this.updateStation.bind(this);

    }
    componentDidMount() {
        fetch("http://52.203.100.234:5010/files/fare_rules.txt")
            .then(res => res.json())
            .then(result => {
                this.setState({ fareid: result });
            }
            )
        fetch("http://52.203.100.234:5010/files/fare_attributes.txt")
            .then(res => res.json())
            .then(result => {
                this.setState({ farename: result });
            }
            )

    }
    updateStation(stop_name, stop_id, type) {
        if (type == "departure") {
            if (this.state.arrival != stop_name) {
                this.setState({ departure: stop_name, depstopId: stop_id });
            }

        }
        if (type == "arrival") {
            if (this.state.departure != stop_name) {
                this.setState({ arrival: stop_name, arrstopId: stop_id });
            }
        }

    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.departure && this.state.arrival) {
            if (prevState.departure != this.state.departure || prevState.arrival != this.state.arrival) {
                var fareId = this.state.fareid.filter(item => {
                    return (item.origin_id == this.state.depstopId &
                        item.destination_id == this.state.arrstopId)
                })

                var fareValue = this.state.farename.filter(item => {
                    return item.fare_id === fareId[0].fare_id
                })
                this.setState({ price: fareValue[0].price })
            }
        }
    }

    render() {
        return (
            <div>
                <div className="bodyContentWrapper">
                    <h2>
                        Metro Station Details and Fare Details
                    </h2>
                    <p className="bodyContent">
                        By selecting the departure and arrival stations in the below you will be able to see the ticket fare
                    </p>
                </div>
                <div className="scrollList">

                    <StationList name={"Select Departure Station"} type="departure" activeElement={this.state.departure} updateStation={this.updateStation} />
                    <StationList name={"Select Arrival Station"} type="arrival" activeElement={this.state.arrival} updateStation={this.updateStation} />
                </div >
                <div  className="fare-description">
                { this.state.departure && this.state.arrival ? <div className="fareResult">
                    Trip Details
                    <div className="fareResultbox">
                        <Station stopName={this.state.departure} stopId={this.state.depstopId} type="fare" />
                        <Station stopName={this.state.arrival} stopId={this.state.arrstopId} type="fare" />
                        <Fare price={this.state.price} />

                    </div></div> : <div></div>}
                    </div>


            </div>
        )
    }
}
export default Body;