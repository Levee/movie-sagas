import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    const { movies, genres, details } = this.props;
    return (
      <>
        {movies[details].description}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres,
    details: state.details
  }
}

export default connect(mapStateToProps)(Details);