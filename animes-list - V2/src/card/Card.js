import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Moment from 'react-moment';

import './Card.css'

class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);

    this.state = {
      genres : [],
      isHovering: false,
    };
  }

  componentDidMount() {
    console.log('this.props.genres', this.props.genres)
    const url = `https://kitsu.io/api/edge${this.props.genres}`
        fetch(url)
          .then( response => response.json())
          .then(res => {
              // console.log('Card#res-genres', res)
              const genres = res.data
                this.setState ({
                    genres
                })   
            })
            // console.log('Card#this.props.genres', this.props.genres)
        }
  
        
  handleMouseHover() {
    this.setState(
     this.toggleHoverState
    );
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
    
  render() {

    const src = this.props.posterImageSmall
    const genres = 'https://kitsu.io/api/edge' + this.props.genres
    console.log('Card#genres', genres)
    return (
        <Link to={`/anime-detail/${this.props.id}`}>
          <div className="col-md-3" onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}>
            <div className='card-group' style={{width: '20rem'}}>
              <div className="card text-white" style={{height: '30rem', width: '2rem', border: '1px solid transparent', borderRadius:'6px'}} >
                  <img className="card-img" src={src} alt={`image of ${this.props.enJap}`}></img>
                  <div className="d-flex flex-column">
                      <h4 className="card-title text-center">{this.props.enJap}</h4>
                  </div>
              </div>
              {this.state.isHovering ? (
                <div className='onHover'>
                  <h2>{this.props.enJap}</h2>
                  <p>{this.props.titleJap}</p>
                  <p>Start date: <Moment format='MMMM Do YYYY'>{this.props.startDate}</Moment></p>
                  <p>Score: {this.props.averageRating}</p>
                  <p className='synopsis-text'>{this.props.synopsis}</p>

                  {Object.keys(genres).length === 0 ? null : (
                    this.state.genres.map(genre => { 
                    return (
                        <div className='list'>
                          <ul id='genres'>
                            <li key={genre.id} id='genre-li'>{genre.attributes.name}</li>
                          </ul> 
                        </div>
                      )
                    })
                  )}
                </div>
              ): null }
            </div>
          </div>
       </Link>  
    );
  }
}

export default withRouter(Cards);