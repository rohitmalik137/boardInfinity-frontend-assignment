import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';

import 'antd/dist/antd.css';
import './inputForm.styles.scss';
import { Form, Input, Button, DatePicker } from 'antd';

const InputForm = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const newTweet = {
      id: uuid(),
      tweet: values.tweet,
      expiryDate: values.expiryDate.toLocaleString(),
    };
    dispatch({
      type: 'POST_TWEET',
      newTweet,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  };

  return (
    <div className="form-container">
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Tweet"
          name="tweet"
          className="formData"
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
          className="formData"
          name="expiryDate"
          rules={[
            {
              required: true,
              message: 'Please input a valid ExpiryDate!',
            },
          ]}
        >
          <DatePicker
            disabledDate={disabledDate}
            format="YYYY-MM-DD HH:mm:ss"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Tweet
        </Button>
      </Form>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   postTweet: (tweet) => dispatch(postTweet(tweet)),
// });

export default connect()(InputForm);
