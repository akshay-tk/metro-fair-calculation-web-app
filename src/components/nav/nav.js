import React, { Component } from 'react'
import './nav.css'

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navWrapper">
               
                <div className="navHead">
                    <h1>KOCHI METRO</h1>
                </div>
            </div>
        )
    }
}
export default Nav;