import React, { useState } from 'react';
import './App.css';

const LogoutButton = (props: any): JSX.Element => (
  <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
);

const LoginButton = (props: any): JSX.Element => (
  <button onClick={props.toggleIsLoggedIn}>ログイン</button>
);

const LoginControl = (): JSX.Element => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);

  const toggleIsLoggedIn = () => {
    setIsLoggedInState(!isLoggedIn);
  };

  if (isLoggedIn) {
    return <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn} />;
  }

  return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />;
};

export default function App() {
  return <LoginControl />;
}
