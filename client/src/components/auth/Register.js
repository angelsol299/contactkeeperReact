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

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'User Aready exists') {
      setAlert(` ${error}`, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert(' Please enter all fileds', 'danger');
    } else if (password !== password2) {
      setAlert(' Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Register a new <span style={{ color: '#289B87' }}>account</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <br />
          <label htmlFor="name">
            <span style={labelColor}>Name</span>
          </label>
          <input
            style={textStyle}
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
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
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">
            <span style={labelColor}>Confirm password</span>
          </label>
          <input
            style={textStyle}
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <br />
        <Button
          style={{ backgroundColor: '#1DD1B3', color: 'white' }}
          variant="contained"
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
