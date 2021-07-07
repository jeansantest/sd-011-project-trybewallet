import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      status: true,
    };
  }

  render() {
    const activeButton = () => {
      const { email, password } = this.state;
      const regex = /\w+@\w+.com(.br)?/;
      const numMin = 6;
      if (regex.test(email) && password.length >= numMin) {
        this.setState({ status: false });
      } else {
        this.setState({ status: true });
      }
    };

    const handleInput = ({ target }) => {
      const { value, name } = target;
      this.setState({ [name]: value }, () => activeButton());
    };

    const { status, email } = this.state;
    const { loginValidation } = this.props;
    return (
      <div>
        TrybeWallet
        <input
          data-testid="email-input"
          name="email"
          onChange={ handleInput }
          type="email"
          placeholder="Nome"
        />
        <input
          data-testid="password-input"
          name="password"
          onChange={ handleInput }
          type="password"
          placeholder="Senha"
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ status }
            onClick={ () => loginValidation(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginValidation: (email) => dispatch(actions.loginValidation(email)) });

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  loginValidation: PropTypes.func.isRequired,
};
