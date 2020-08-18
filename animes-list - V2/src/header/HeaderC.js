import React, { Component } from 'react'
import MyNavbar from '../navbar/Navbar'
import SearchBar from '../shared/SearchBar'

import './Header.css'
import headersvg from '../img/headersvg.svg'


export default class HeaderC extends Component {
    render() {
        
        return (
            <React.Fragment>
                <div className='header' >
                    <div className='nav'><MyNavbar /></div>
                        <div className='svg'> 
                            <img className="img-fluid " src={headersvg} alt=''></img>
                        </div>
                        <SearchBar />
                </div>
            </React.Fragment>
        )
    }
}
