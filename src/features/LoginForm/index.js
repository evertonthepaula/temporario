import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function LoginForm({ dispatch }) {
  function loginSuccess() {
    dispatch({
      type: 'LOGIN_SUCCESS',
    });
  }
}

export default connect()(LoginForm);
