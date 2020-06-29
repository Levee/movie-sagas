import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Space, Tabs } from 'antd';
import { ArrowLeftOutlined, EditOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;


class Details extends Component {
  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.details + 1 });
  }

  render() {
    const { movies, genres, details, history } = this.props;
    return (
      <>
        {(movies === [] || genres === [] || details === null) ?
          <>
            {history.push('/')}
          </>
          : <>
            <h2>{movies[details].title}</h2>
            <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
                    Title
                  </span>
                }
                key="1"
              >
                <h2>{movies[details].title}</h2>
                <p>{genres.map((genre, i) => <span key={i}>{genre} </span>)}</p>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    Description
                  </span>
                }
                key="2"
              >
                <p>{movies[details].description}</p>
              </TabPane>
            </Tabs>
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
                onClick={() => history.push(`/edit/${details}`)}
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