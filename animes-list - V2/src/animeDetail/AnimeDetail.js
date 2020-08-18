import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import logo from '../img/spinner.gif'
import './AnimeDetail.css'

class AnimeDetail extends Component {

    constructor(props){
        super(props)

        this.state = {
            animes: {}
        }
    }

    componentDidMount(){
        const animeId = this.props.match.params.id
        console.log('animedetail#id', animeId)

        const url = `https://kitsu.io/api/edge/anime/${animeId}`
        fetch(url)
          .then( response => response.json())
          .then(res => {
              console.log('res', res)
              const animes = res.data
              console.log('anime',animes)
                this.setState ({
                    animes
                })   
            })
        }

    render() {  

        const animeId = this.props.match.params.id
        // console.log('props', this.props)
        console.log('params-id', animeId )
        // console.log('state', this.state)
        // console.log('attributes', this.state.animes.attributes)
        const {
            animes
        } = this.state

        // prevent return of animes = undefined
        if (Object.keys(animes).length === 0) {
            return (
                <div className='row justify-content-center'><img src={logo}></img></div>
            )
        }
        
        return (
            <div className='container-fluid p-0'>
                <div className='row-fluid'>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <img src={animes.attributes.posterImage.small} alt=''></img>
                    </div>
                        <div className='col-6'>
                            <h2>{animes.attributes.titles.en}</h2>
                            <p>{animes.attributes.synopsis}</p>
                            </div>
                        {/* <div className='col-6 offset-4'>{animes.attributes.synopsis}</div> */}
                </div>
            </div>   
        )
     }
  }

                
export default withRouter(AnimeDetail);


