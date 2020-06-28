import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movies extends Component {
  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  render() {
    return (
      <>
        {JSON.stringify(this.props.movies)}
        {this.props.movies.map((movie, i) =>
          <div key={i}>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        )}
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

export default connect(mapStateToProps)(Movies);