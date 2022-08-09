import React, { Component, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const requestOptions = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    };
    fetch('http://localhost:8080/auth', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.token);
        localStorage.setItem('token', data.token);
      });
    setRedirect(true);
  };

  if (redirect) return <Navigate to="/profile" />;

  // function handleChange() {
  //   if (
  //     emailRef.current.value.length === 0 ||
  //     passwordRef.current.value.length === 0
  //   ) {
  //     submitButtonRef.current.disabled = true;
  //   } else {
  //     submitButtonRef.current.disabled = false;
  //   }
  //   createSignInObject(emailRef.current.value, passwordRef.current.value);
  // }
  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 280,
    margin: '20px auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };
  return (
    <Paper elevation={10} style={paperStyle}>
      <form onSubmit={submit}>
        <h3>Login</h3>
        <div className="form-group">
          {/* <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          /> */}
        </div>
        <TextField
          label="Email"
          placeholder="Enter Email:"
          fullWidth
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Enter Password:"
          fullWidth
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form-group">
          {/* <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          /> */}

          <Button
            type="submit"
            variant="contained"
            onClick={() => '/profile'}
            className="btn btn-primary btn-bloack"
          >
            Login
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Login;
