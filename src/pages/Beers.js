
import React, { Component } from 'react'
import beerService from '../services/beerService'
import { Link } from 'react-router-dom';

class Beers extends Component {
  state={
    beers:[]
  }

  componentDidMount(){
    beerService.getAllBeers()
    .then((response)=>{
      console.log(response.data)
      const beersFromApi = response.data
      this.setState({
        beers: beersFromApi
      })
    })
  }
  render() {
    const { beers } = this.state
    return (
      <div>
        {beers.length > 0 ? beers.map((beer)=>{
          return(
              <article className='container' key={beer._id}>
                <ul>
                  <li>
                    <div className="cuadro-beers">
                      <img src={beer.image_url} alt={beerService.name}></img>
                      <div className="cuadro-centro">
                        <h3>{beer.name}</h3>
                        {/* <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p> */}
                        <Link to={`/beers/${beer._id}`}>
                          <button>Detail</button>
                        </Link>  
                      </div>
                    </div>
                  </li>
                </ul>
              </article>
          )
      }): <p>Loading...</p>}
      </div>
    )
  }
}

export default Beers