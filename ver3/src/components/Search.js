import React from "react";
import Movie from './Movie';
import "./Search.css";
import {ytsMoviesApi} from '../api';

class proj3 extends React.Component {
    state = {
      isLoading: false,
      movies: [],
      value: "",
      name: "영화 검색",
      movie: {},
      showMovie: false
    };
  
    getSearchMovie = async () => {
      console.log('search Movie');
      const search = this.state.value;
  
      try {
        if (search === "") {
          this.setState({movies: [], isLoading: false})
        } else {
          this.setState({movies: [], isLoading: true})
          const {data: {
              data:
                {
                  movies
                }
            }} = await ytsMoviesApi.search();
          //alert("(Loading 메시지 확인중...)");
          this.setState({movies: movies, isLoading: false});
          console.log(this.state.movies);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    componentDidMount() {
      this.getSearchMovie();
    };
  
    handleChange = (e : any) => {
      this.setState({value: e.target.value});
    };
  
    handleSubmit = (e : any) => {
      e.preventDefault();
      this.getSearchMovie();
    };

    handleMovie = (movie, e) => {
      e.preventDefault();
      this.setState({movie: movie});
      this.setState({showMovie: true});
    }
  
    render() {
      const {movies, isLoading, name, movie} = this.state;
  
      return (<section className="container">
        {
          isLoading
            ? (<div className="loader">
              <span className="loader__text">({this.state.name}) Loading... {this.state.value}</span>
            </div>)
            : (<form onSubmit={this.handleSubmit}>
              <div className="inner_container">
                <div className="input_div">
                  <h1>yts.mx 영화 정보</h1>
                  <div className="inline">
                    <input className="input_search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="입력포맷: <정렬기준> <검색개수> 예: like 5"/>
                    <button className = "input_button" onClick = {this.handleToggle}>+</button>
                  </div>
                </div>
                <div className="movies">
                  {movies && movies.map((movie,i) => (
                    <img className="movies" src={movie.large_cover_image} onClick={this.handleMovie.bind(this, movie)} />
                    )
                  )}
                </div>
                <div className="movieInfo">
                  {this.state.showMovie ? <Movie key={movie.link} id={movie.id} year={movie.year} title={movie.title} poster={movie.medium_cover_image} rating={movie.rating} runtime = {movie.runtime} summary = {movie.summary} genre = {movie.genres}/>: null}
                </div>
              </div> 
            </form>)
        }
      </section>);
    }
  }
  
  export default proj3;