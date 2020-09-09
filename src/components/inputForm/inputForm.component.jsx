import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import uuid from 'react-uuid';

import 'antd/dist/antd.css';
import './inputForm.styles.scss';
import { Form, Input, Button, DatePicker } from 'antd';

class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
      expiryDate: null,
    };
  }

  onFinish = (values) => {
    console.log('Success:', values);
    console.log(values);
    const newTweet = {
      id: uuid(),
      tweet: values.tweet,
      expiryDate: values.expiryDate,
    };
    this.props.dispatch({
      type: 'POST_TWEET',
      newTweet,
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  };

  render() {
    return (
      <div className="form-container">
        <Form
          name="basic"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Tweet"
            name="tweet"
            rules={[
              {
                required: true,
                message: 'Tweet here!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="DatePicker"
            name="expiryDate"
            rules={[
              {
                required: true,
                message: 'Please input a valid ExpiryDate!',
              },
            ]}
          >
            <DatePicker
              disabledDate={this.disabledDate}
              format="YYYY-MM-DD HH:mm:ss"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Tweet
          </Button>
        </Form>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   postTweet: (tweet) => dispatch(postTweet(tweet)),
// });

export default connect()(InputForm);
