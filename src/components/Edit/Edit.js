import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Space } from 'antd';
import { StopOutlined, SaveOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

class Edit extends Component {
  state = {
    edit: {
      title: '',
      description: ''
    }
  }

  render() {
    const { movies, genres, details, history } = this.props;
    return (
      <>
        <Space>
          <Button
            type='default'
            danger
            icon={<StopOutlined />}
            onClick={() => history.push(`/details/${details}`)}
          >Cancel</Button>
          <Button type='primary' icon={<SaveOutlined />}>Save</Button>
        </Space>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres,
    details: state.details,
  }
}

export default connect(mapStateToProps)(withRouter(Edit));