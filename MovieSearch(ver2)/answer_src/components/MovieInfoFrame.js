import React from 'react';
import './MovieInfoFrame.scss';
import Movie from './Movie';

const MovieInfoFrame = ({ movies, isLoading, visibleIdx }) => {
    return (
        isLoading ?
            <div>
                로딩중입니다..
            </div>
            :
            <div className="MovieInfoFrame">
                {/* false && 는 조건부 렌더링으로, 조건문 자리가 true인 요소만 렌더링함 */}
                {/* https://ssangq.netlify.app/posts/conditional-rendering-vs-diplay-none */}
                {movies.map(movie => {
                    return ((movies.indexOf(movie) == visibleIdx) && <Movie key={movie.link} id={movie.link} year={movie.pubDate}
                        title={movie.title} poster={movie.image} rating={movie.userRating}
                        director={movie.director} actor={movie.actor}></Movie>)
                }
                )
                }
            </div >
    );
};

export default MovieInfoFrame;
