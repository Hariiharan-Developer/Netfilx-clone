import React, { useState,useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/assets/back_arrow_icon.png'

const Player = () => {

  const [apiData,setApiData]=useState({
  name:'',
  key:'',
  published_at:'',
  typeof:'',
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGQzYmJhZTAzNzk2MTFhMjIwYzY2OTc1ODcyZTEwMSIsIm5iZiI6MTc1NDY4MTI3Ni45MTUsInN1YiI6IjY4OTY0ZmJjODlmYThiMGEwNTI2NzQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.549-bBDIWIxa2X2KW0y1ZCdf5W-y8OlqlxQwlT3l0fk'
  }
};

useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/755898/videos?language=en-US', options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  
},[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='Trailer'frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
