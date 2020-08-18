import React, { Component } from 'react'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import SearchBar from '../shared/SearchBar'

class MyNavbar extends Component {
//   constructor(){
//     super();

//     this.state = {
//          isClicked: true
//     }
// }

// changeStyle(){
//   this.setState(
//     {
//       isClicked: !this.state.isClicked
//     }
//   )
// }

// {`navlink + ${navlink_class}`} onClick={this.changeStyle.bind(this)}

    render() {

      // let navlink_class = this.state.isClicked ? "navlink_isClicked" : "navlink";
        return (
          
            <Navbar className='navbar navbar-fixed-top'   style={{fontSize: '2em', color: 'transparent'}}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="m-auto" style={{color:'white'}}>
                  <ul className= 'list-inline-mb-0'>
                    <li className="list-inline-item mr-5" >
                      <NavLink to="/" exact className="navlink">Home</NavLink>
                    </li>
                    <li className="list-inline-item mr-5">
                      <NavLink to="/recent" exact className="navlink">Recent</NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/my-list" exact className="navlink">My list</NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/best-rated" exact className="navlink">Best Rated</NavLink>
                    </li>
                  </ul>
                  </Nav>
                </Navbar.Collapse>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                  </Form> */}
              </Navbar>  
        )
    }
}

export default MyNavbar;


            