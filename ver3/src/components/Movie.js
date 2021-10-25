import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title,genre, poster, like, rating, runtime, summary}) {
  return (
    <div className="movie">
      <div className="subMovie">
        <a href={id} target="_blank">
          <img src={poster} alt={title} titlt={title}></img>
          <div className="movie__data">
            <p className="movie__year">
              {year}<span> 년 개봉</span> 
            </p>
            <h3 className="movie__title">{
                title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
              }</h3>
              <p className="movie__genre">
                <span>{genre}</span> 
              </p>
              <p className="movie_Info">영화정보</p>
            <div className="movie_Info_Detailed">
              <p className="movie__runtime">
                {runtime}<span>분</span> 
              </p>
              <p className="movie__rating">
                <span>평점: </span> {rating}
              </p>
              <p className="movie__like">
                <span>좋아요: </span> {like}
              </p>
            </div>
            <p className="movie_summary">
                <span>줄거리</span> 
                <p>{summary}</p>
              </p>
          </div>
        </a>
    </div>
  </div>
  )
};

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  like: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};

export default Movie;
