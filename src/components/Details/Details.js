import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    return (
      <>
        
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

export default connect(mapStateToProps)(Details);