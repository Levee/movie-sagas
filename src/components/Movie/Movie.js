import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movie extends Component {
  render() {
    const { movies, key } = this.props;
    return (
      <>
        <img src={movies[key].poster} alt={movies[key].title} />
        <h3>{movies[key].title}</h3>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres
  }
}

export default connect(mapStateToProps)(Movie);