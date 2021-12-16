import React, { Component } from 'react'
import Pokemon from './Pokemon'
import Stopwatch from './Stopwatch'

export default class PokemonContainer extends Component {
  state = {
    pokemon: [],
    caughtPokemon: [],
    timerOn: false
  }

  // get ALL my POKEMON add them to state
  componentDidMount() {
    console.log("MOUNTED PokemonContainer")
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(r => r.json())
    .then(data => this.setState({
      pokemon: data.results
    }))
    console.log(this.state)
  }

  // state or props changed
  componentDidUpdate() { // function or more like method declarations -- componentDidUpdate is a method that belongs to the object
    console.log("UPDATED PokemonContainer")
    console.log(this.state)
  } // DO NOT setState in componentDidUpdate unless it's conditional - otherwise infinit loop

  catchPokemon = (url) => {
    this.setState(prevState => ({
      caughtPokemon: [...prevState.caughtPokemon, url]
    })) // yellow parenthis lets it know that the curly brackets within are that of an object and not of the funtion. Allows us to keep it implicit without having to say return and make it explicit 
  }

  switchTimer = () => {
    this.setState(prevState => ({
      timerOn: !prevState.timerOn
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.switchTimer}>Stopwatch</button>
        {this.state.timerOn ? <Stopwatch /> : null}
        <h1>Gotta catch 'em all!</h1>
        <ul>
          {this.state.pokemon.map((p, i) => <Pokemon key={i} {...p} catchPokemon={this.catchPokemon} />)} 
          {/* in project use id # not i for key */}
        </ul> 

        <h2>Caught Pokemon</h2>
        {this.state.caughtPokemon.map((p, i) => <img key={i} src={p} alt="pokemon" />)}
      </div>
    )
  }  
}
