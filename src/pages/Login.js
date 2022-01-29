import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import local from '../services/handleLocal';
// import { sendEmail } from '../redux/actions';
// import HeaderFoods from '../components/Headers/HeaderFoods';

function Login({ history }) {
  const [email, setEmail] = useState({ email: '' });
  const [password, setPassword] = useState('');

  const validateForms = () => {
    const minLength = 6;
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(email);
    return emailValidate.test(email.email) && password.length > minLength;
  };

  const handleClick = () => {
    local.set.mealsToken();
    local.set.cocktailsToken();
    local.set.user(email);

    history.push('/foods');
  };

  return (
    <main>
      <form>
        <label htmlFor="email-input">
          Email
          <input
            type="text"
            id="email-input"
            name="email"
            data-testid="email-input"
            onChange={ ({ target }) => setEmail({ email: target.value }) }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            id="password-input"
            name="password"
            data-testid="password-input"
            disabled=""
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ !validateForms() }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

// mapDispatchToProps = (dispatch) => {(
//   setEmail: (email) => dispatch(sendEmail(email));
// )};

export default Login;

// export default connect(null, mapDispatchToProps)(Login);
