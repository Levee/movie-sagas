import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Space } from 'antd';
import { StopOutlined, SaveOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
};

class Edit extends Component {
  render() {
    const { movies, details, dispatch, history } = this.props;
    const onFinish = values => {
      console.log(values);
      dispatch({ type: 'DISPATCH_EDITS', payload: { values: values, id: details } });
      history.push(`/details/${details}`);
    };
    return (
      <>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['movie', 'title']} label="Title" rules={[{ required: true }]}>
            <Input value='test' />
          </Form.Item>
          <Form.Item name={['movie', 'description']} label="Description" rules={[{ required: true }]}>
            <Input.TextArea
              value={movies[details].description}
              autoSize={{ minRows: 3, maxRows: 10 }}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Space>
              <Button
                type='default'
                danger
                icon={<StopOutlined />}
                onClick={() => history.push(`/details/${details}`)}
              >Cancel</Button>
              <Button
                type='primary'
                icon={<SaveOutlined />}
                htmlType='submit'
              >
                Save
              </Button>
            </Space>
          </Form.Item>
        </Form>
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