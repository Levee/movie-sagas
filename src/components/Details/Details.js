import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Space } from 'antd';
import { ArrowLeftOutlined, EditOutlined, HomeOutlined } from '@ant-design/icons';


class Details extends Component {
  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.details + 1});
  }

  render() {
    const { movies, genres, details, history } = this.props;
    return (
      <>
        {(movies === [] || genres === [] || details === null) ?
          <>
            {/* <h2>Error loading details.</h2>
            <Button type='primary' icon={<HomeOutlined />} onLoad={history.push('/')}>Return Home</Button> */}
            {history.push('/')}
          </>
          : <>
            <h2>{movies[details].title}</h2>
            {movies[details].description}
            {genres.map((genre, i) => <span key={i}>{genre} </span>)}
            <br />
            <Space>
              <Button
                type='primary'
                icon={<ArrowLeftOutlined />}
                onClick={() => history.push('/')}
              >
                Back
              </Button>
              <Button
                type='default'
                icon={<EditOutlined />}
                onClick={() => history.push('/')}
              >
                Edit
              </Button>
            </Space>
          </>}
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