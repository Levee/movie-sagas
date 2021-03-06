import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom';

class Movies extends Component {
  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  // dispatch 'FETCH_DETAILS' when a Col is clicked
  handleClick = (i) => {
    console.log('in handleClick');
    this.props.dispatch({ type: 'FETCH_DETAILS', payload: i });
    this.props.history.push(`/details/${i}`);
  }

  render() {
    const { Meta } = Card;
    return (
      <Row align='middle'>
        {/* map all the movies as a Column containing a Card */}
        {this.props.movies.map((movie, i) =>
          <Col
            onClick={() => this.handleClick(i)}
            key={i}
            md={12}
            lg={8}
          >
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt={movie.title} src={movie.poster} />}
            >
              <Meta title={movie.title} />
            </Card>
          </Col>
        )}
      </Row>
    )
  }
}

// get props from global state
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres
  }
}

export default connect(mapStateToProps)(withRouter(Movies));