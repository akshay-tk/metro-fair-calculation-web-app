import React, { Component } from 'react'
import './fare.css'

class Fare extends Component {
    constructor(props) {
        super(props)

    }


    render() {

        return (
            <div className="fare">
                <h4>Fare</h4>
                <div className="fareBox">
                    {this.props.price}
                </div>
            </div>
        )
    }

}
export default Fare;