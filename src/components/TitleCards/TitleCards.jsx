import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/assets/cards/Cards_data'



const TitleCards = ({title,category}) => {
  
  const[apiData,setApiData] = useState([])
  const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGQzYmJhZTAzNzk2MTFhMjIwYzY2OTc1ODcyZTEwMSIsIm5iZiI6MTc1NDY4MTI3Ni45MTUsInN1YiI6IjY4OTY0ZmJjODlmYThiMGEwNTI2NzQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.549-bBDIWIxa2X2KW0y1ZCdf5W-y8OlqlxQwlT3l0fk'
  }
};



const handleWheel = (event)=>{
  event.preventDefault()
  cardsRef.current.scrollLeft += event.deltaY
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handleWheel)
},[])


  return (
    <div className='title-cards'>
      <h2>{title?title:'Popular on Netflix'}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
      
    </div>
  )
}

export default TitleCards
