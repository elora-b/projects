import React from 'react';
import Card from '../card/Card'
import './BestRatedC.css'

class BestRatedC extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            animes: []
        }
    }
    
    componentDidMount() {
      fetch('https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=20&sort=ratingRank')
        .then(response => response.json())
        .then(res => {
          
          const animes = res.data
          console.log('animes', res.data)
          
          this.setState({
            animes
          })
        });  
      }

  render() {

    return (
        <div className= "container" style={{display: 'flex', flexDirection: 'row'}}>
          <div className="row">
            <div className="col-12">
              <h2 className="title">Best Rated</h2>
              </div>
              <div className="col-12">
              {this.state.animes.map(anime => {
                //  console.log('anime', anime)
                      return (
                        <Card
                          key={anime.id}
                          id={anime.id}
                          posterImageSmall={anime.attributes.posterImage.small}
                          title={anime.attributes.titles.en}
                          startDate={anime.attributes.startDate}
                          titleJap={anime.attributes.titles.ja_jp}
                          enJap={anime.attributes.titles.en_jp}
                          synopsis={anime.attributes.synopsis}
                          averageRating={anime.attributes.averageRating}
                          synopsis={anime.attributes.synopsis}
                          genres={anime.relationships.genres.links.related}
                          showType={anime.attributes.subtype}
                        />
                      )
                  })}
              </div>
            </div>
          </div>
        )
      }
    }

export default BestRatedC;
