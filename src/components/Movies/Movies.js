import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col } from 'antd';
import 'antd/dist/antd.css';

class Movies extends Component {
  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  

  render() {
    const { Meta } = Card;
    return (
      <Row align='middle'>
        {this.props.movies.map((movie, i) =>
          <Col key={i} sm={12} md={8} lg={6}>
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

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres
  }
}

export default connect(mapStateToProps)(Movies);