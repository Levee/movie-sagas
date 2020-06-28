import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';


class Details extends Component {
  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.details + 1});
  }

  render() {
    const { movies, genres, details } = this.props;
    return (
      <>
        <h2>{movies[details].title}</h2>
        {movies[details].description}
        {genres.map((genre, i) => <span key={i}>{genre} </span>)}
        <br />
        <Button
          type='primary'
          icon={<ArrowLeftOutlined />}
          onClick={() => this.props.history.push('/')}
        >
          Back
        </Button>
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