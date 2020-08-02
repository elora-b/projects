import React, { Component } from 'react'

export default class Contact extends Component {

    state= {
        show: true,
    }

    showContact = () => {
        this.setState({
            show : !this.state.show
        })
    }

    deleteContact = () => {

        this.props.deleteOnClick()

    }

    render() {
        return (

            <div className="card card-body mb-3 text-center align-selft-center">
                <h4>
                    <i style={{cursor: 'pointer', float: 'left', color: 'cyan'}} className="fas fa-user-plus"
                    onClick={this.addContact}>   
                    </i>
                    {this.props.nom}&nbsp; 
                    <i style={{cursor: 'pointer'}} className="fas fa-sort-down" 
                        onClick={this.showContact}>
                    </i>
                    <i style={{cursor: 'pointer', float: 'right', color: 'red'}} className="fas fa-times" 
                    onClick={this.deleteContact}>
                    </i> 
                </h4>
                {this.state.show ? (
                    <ul className="card card-body mb-3">
                        <li className="list-group-item">
                        Email : {this.props.email}
                        </li>
                        <li className="list-group-item">
                         Téléphone : {this.props.tel}   
                        </li>
                    </ul> 
                ) : null}
            </div>
        )
    }
}
