import React, { useState } from 'react';
import './App.css';
import { Home } from './pages/Home';
import { RecoilRoot } from 'recoil';
import { Router } from './router/Router';

export default function App() {
  return (
    <>
      {/* <RecoilRoot> */}
      {/* <Router /> */}
      <Home />
      {/* </RecoilRoot> */}
    </>
  );
}
