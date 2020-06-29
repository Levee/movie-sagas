import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Space, Tabs } from 'antd';
import { ArrowLeftOutlined, EditOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;


class Details extends Component {
  // on mount, dispatch 'FETCH_GENRES' to retrieve the genres for the selected movie
  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.details + 1 });
  }

  render() {
    const { movies, genres, details, history } = this.props;
    return (
      <>
        {/*
          Conditionally render details if a movie was selected.
          If the page is reloaded on the details page, you will be redirected to the home page.
        */}
        {(movies === [] || genres === [] || details === null) ?
          <>
            {history.push('/')}
          </>
          : <>
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
                <ul>{genres.map((genre, i) => <li key={i}>{genre} </li>)}</ul>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    Description
                  </span>
                }
                key="2"
              >
                <p style={{textAlign: 'justify'}}>{movies[details].description}</p>
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

// get props from global state
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres,
    details: state.details
  }
}

export default connect(mapStateToProps)(Details);