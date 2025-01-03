import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Landing = ({ movies }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    afterChange: (current) => setActiveIndex(current), // Update activeIndex on slide change
  };

  return (
    <div className="landing">
      <div className="slider-container">
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <div key={movie.id} className="slider-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                style={{ width: "100%", height: "100vh" }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="movie-info">
        <h1>{movies[activeIndex]?.title}</h1>
        <p>{movies[activeIndex]?.overview}</p>
        <p>Rating: {movies[activeIndex]?.vote_average}/10</p>
        <p>Relese Date: {movies[activeIndex]?.release_date}</p>
      </div>
    </div>
  );
};

export default Landing;
