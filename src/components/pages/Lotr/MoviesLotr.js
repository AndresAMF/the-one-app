import React from 'react'
import {MoviesLotrDatabase} from './MoviesLotrDatabase'
import "./MoviesLotr.css"

function MoviesLotr() {
  return (
    <>
    <div className="movies-containerLotr">
    <h1>Movies</h1>
    <div className="movies-wrapperLotr">
    <div className="movies-itemsLotr">
      {MoviesLotrDatabase.map(item => (
        <div className="movies-itemLotr" key={item.id}>
          <div className="movies-itemLotr-image">
        <img src={item.src} alt={item.name}/>
          </div>
        <div className="movies-item-infoLotr">
        <h3 className="lotrNameMovie">{item.name}</h3>
        <p className="lotrDescription">{item.description}</p>
        </div>
        </div>
      ))}
      </div>
      </div>
      </div>
      </>
  )
}

export default MoviesLotr