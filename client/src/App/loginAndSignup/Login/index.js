import React, { Component, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

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

  return (
    <form onSubmit={submit}>
      <h3>Login</h3>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button to={'/profile'} className="btn btn-primary btn-bloack">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
