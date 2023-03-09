import React from 'react';
import { Map } from './components/Map';
import { Amplify, PubSub } from 'aws-amplify';
import awsconfig from "./awsconfig"

import './App.css';

Amplify.configure(awsconfig);
PubSub.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
