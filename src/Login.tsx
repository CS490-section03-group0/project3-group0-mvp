import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

interface Props {
  setLoggedIn: (isLoggedIn: boolean) => void;
}

export default function Login(props: Props) {
  const { setLoggedIn } = props;
  const history = useHistory();
  const [loginMessage, setLoginMessage] = useState('');
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  function GoToSignUp() {
    history.push('./signup');
  }

  function PerformLogin() {
    const tusername = login.username.trim();
    const tpassword = login.password.trim();

    if (tusername === '' || tpassword === '') {
      setLoginMessage('Please fill in both fields.');
    } else {
      fetch('/api/login/password', {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        mode: 'no-cors',
        body: JSON.stringify({
          username: tusername,
          password: tpassword,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            history.push('/');
          } else setLoginMessage(data.message);
        })
        .catch((error) => {
          <div className="login-error-box">
            Malformed message was recieved:
            {error}
          </div>;
        });
    }
  }

  function handleLogin(event) {
    const { value: NewValue } = event.target;
    setLogin({
      ...login,
      [event.target.name]: NewValue,
    });
  }

  function googleLogin(googleUser: any) {
    setLoggedIn(true);
    fetch('/api/login/oauth', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      mode: 'no-cors',
      body: JSON.stringify({ token: googleUser?.tokenId }),
    });
    history.push('/profile');
  }

  return (
    <div className="LoginBox">
      <div className="Login">
        <div className="login-password">
          <form>
            <div className="form-label">Username</div>
            <input
              type="text"
              name="username"
              className="login-username"
              defaultValue={login.username}
              onChange={handleLogin}
              autoComplete="off"
            />
            <div className="form-label">Password</div>
            <input
              type="text"
              name="password"
              className="login-password"
              defaultValue={login.password}
              onChange={handleLogin}
              autoComplete="off"
            />
          </form>
        </div>
        <button type="button" value="Login" onClick={PerformLogin}>Login</button>
        <button type="button" value="Signup" onClick={GoToSignUp}>Sign Up</button>
        <div>{loginMessage}</div>
        <br />
        <hr />
        <br />
        <h1>Login to continue</h1>
        <GoogleLogin
          clientId="154638215001-5tdj4ttljsh2c3m5uojmq7nrruock21s.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={googleLogin}
          cookiePolicy="single_host_origin"
          isSignedIn
        />
      </div>
    </div>
  );
}
