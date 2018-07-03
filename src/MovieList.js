import React, { Component } from 'react';
import Movie from './Movie';


class MovieList extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=722efb87a3d2a44b62ff5d8d47d63664&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');

      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}


export default MovieList;
