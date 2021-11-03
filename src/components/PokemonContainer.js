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
  componentDidUpdate() {
    console.log("UPDATED PokemonContainer")
    console.log(this.state)
  } // DO NOT setState in componentDidUpdate unless it's conditional

  catchPokemon = (url) => {
    this.setState(prevState => ({
      caughtPokemon: [...prevState.caughtPokemon, url]
    }))
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
        </ul>

        <h2>Caught Pokemon</h2>
        {this.state.caughtPokemon.map(p => <img src={p} alt="pokemon image" />)}
      </div>
    )
  }
}
