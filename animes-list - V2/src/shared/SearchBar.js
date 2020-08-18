import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="row justify-content-md-center searchbar">
                <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="Search..." size="100" aria-label="Search" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button className="btn" type="button" id="button-addon2">Go !</button>
                    </div>
                </div> 
            </div> 
        )
    }
}


