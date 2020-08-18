import React from 'react';
import Card from '../card/Card'

class Popular extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            animes: []
        }
    }
    
    componentDidMount() {
      fetch('https://kitsu.io/api/edge/trending/anime?limit=20')
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
        <div className= "container" style={{display: 'flex', flexDirection: 'row', borderRadius:'10px'}}>
          <div className="row">
            <div className="col-12">
            {this.state.animes.map(anime => {
              console.log('genres', anime.relationships.genres.links.related)
                    return (
                      <Card
                        key={anime.id}
                        id={anime.id}
                        posterImageSmall={anime.attributes.posterImage.small}
                        title={anime.attributes.titles.en}
                        startDate={anime.attributes.startDate}
                        titleJap={anime.attributes.titles.ja_jp}
                        enJap={anime.attributes.titles.en_jp}
                        averageRating={anime.attributes.averageRating}
                        synopsis={anime.attributes.synopsis}
                        genres={anime.relationships.genres.links.related}
                      />
                    )
                })}
            </div>
          </div>
        </div>
      )
    }
  }

export default Popular;