import React from 'react';
import './App.css';
import { Map } from './components/Map';
import { Amplify, PubSub } from 'aws-amplify';
import awsconfig from "./awsconfig"

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
