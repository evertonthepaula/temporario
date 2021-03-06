import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../styles/components/button';

function LoginForm({ dispatch }) {
  function login() {
    dispatch({
      type: 'LOGIN_SUCCESS'
    });
  }

  function logout() {
    dispatch({
      type: 'LOGOUT'
    });
  }

  return (
    <>
      <form>
        <label htmlFor="login">login</label>
        <input type="text" id="login" />

        <label htmlFor="senha">login</label>
        <input type="text" id="senha" />

        <Button type="submmit" color="green" onClick={() => login()}>
          login
        </Button>
        <Button type="submmit" className="red" onClick={() => logout()}>
          logout
        </Button>
      </form>
    </>
  );
}

LoginForm.propTypes = {
  dispatch: PropTypes.func
};

LoginForm.defaultProps = {
  dispatch: () => {}
};

export default connect()(LoginForm);
