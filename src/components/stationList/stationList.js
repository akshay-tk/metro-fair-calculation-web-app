import React, { Component } from 'react';
import './stationList.css';
import Station from '../station/station'

class StationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{}]
        }
    }
    componentDidMount() {
        fetch("http://52.203.100.234:5010/files/stops.txt")
            .then(res => res.json())
            .then(result => {
                this.setState({ items: result });
            }
            )
    }
    
    render() {
       
        return (
            <div >
                <h2 >{this.props.name}</h2>
                
                <div className="listWrapper" >{
                    this.state.items.map(item => (
                        <Station updateStation={this.props.updateStation} type={this.props.type} stopName={item.stop_name} stopId={item.stop_id} activeElement={this.props.activeElement}/>

                    ))


                }
                </div>
            </div>
        )
    }
}
export default StationList;