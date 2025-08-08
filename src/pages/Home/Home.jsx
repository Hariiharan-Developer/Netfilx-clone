import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_baner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/assets/hero_title.png'
import play_icon from '../../assets/assets/play_icon.png'
import info_icon from '../../assets/assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_baner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            {" "}
            Discovering his ties to a secret ancient order, a young man living
            in modern Instanbul embarks on a quest to save the city from an
            immortal enemy{" "}
          </p>

          <div className="hero-btn">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="core-cards">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only On Netflix"} />
        <TitleCards title={"Upcomming"} />
        <TitleCards title={"Top Pics For You"} />
      </div>
      <Footer/>
    </div>
  );
}

export default Home
