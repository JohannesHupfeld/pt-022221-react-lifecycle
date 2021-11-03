import React from 'react'

export default function Pokemon({name, url, catchPokemon}) {
  function handleClick(){
    fetch(url)
    .then(r => r.json())
    .then(data => catchPokemon(data.sprites.front_default))
  }

  return (
    <>
      <li>{name}</li>
      <button onClick={handleClick}>Catch</button>
    </>
  )
}
