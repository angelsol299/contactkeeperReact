import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Button from '@material-ui/core/Button';

const textStyle = {
  borderRadius: '3px'
};

const labelColor = {
  color: '#798180'
};

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'Invalid Credentials') {
      setAlert(` ${error}`, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Login to your <span style={{ color: '#289B87' }}>account</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            <span style={labelColor}>Email Address</span>
          </label>
          <input
            style={textStyle}
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <span style={labelColor}>Password</span>
          </label>
          <input
            style={textStyle}
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <br />
        <Button
          style={{ backgroundColor: '#1DD1B3', color: 'white' }}
          variant="contained"
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
