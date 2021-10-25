import React from 'react';
import Movie from './Movie';
import "./Search.css";
import {naverMoviesApi} from '../api';

class Search extends React.Component {
  state = {
    isLoading: false,
    isClicked : false,
    movies: [],
    value: "",
    name: "영화 검색",
    movieChk : null,
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
            items
          }} = await naverMoviesApi.search(search);
        //alert("(Loading 메시지 확인중...)");
        this.setState({movies: items, isLoading: false});
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getSearchMovie();
  };

  handleChange = (e) => {
    this.setState({value: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getSearchMovie();
  };

  handleToggle = () => {
    this.setState({
        isClicked : true,
        movieChk : null
      });
  };

  handleClick = (i) => {
    this.setState({
      movieChk : i
      });
  };

  render() {
    const {movies, isClicked, isLoading, name, movieChk} = this.state;
    const array = [];
    const numberOfmovies = movies.length;
    const BtnNum =['1','2','3','4', '5', '6', '7', '8', '9', '10'];

    const movieResult = movies.map((movie, index) => {
      return <Movie key={movie.link} id={movie.link} year={movie.pubDate} title={movie.title} poster={movie.image} rating={movie.userRating} director={movie.director} actor={movie.actor} index = {index}/>
    });

    for(let i = 0; i < numberOfmovies; i++){
      array.push(<li><button className = 'buttonNumber' onClick={() => this.handleClick(i)}>{BtnNum[i]}</button></li>)
      if(i == 9){
        break;
      }
    };

    return (<section id = 'container_id' className="container">
      {
        isLoading
          ? (<div className="loader">
            <span className="loader__text">({this.state.name}) Loading... {this.state.value}</span>
          </div>)
          : (<form onSubmit={this.handleSubmit}>
            <div>
              <div className="input_div">
                <h1>영화 검색 서비스</h1>
                <div className="inline">
                  <input className="input_search" type="text" value={this.state.value} onChange={this.handleChange} placeholder=" 영화 이름을 입력하세요."/>
                  <button className = "input_button" onClick = {this.handleToggle}>+</button>
                </div>
              </div>
              <div className="buttons">
                <ul style={this.state.isClicked ? {display:'contents'} : {display: 'none'}}>
                    <li>
                    {array}
                    </li>
                </ul>
              </div>
              <div className='movies'>{movieResult[movieChk]}</div>
            </div>
          </form>)
      }
    </section>);
  }
}

export default Search;
