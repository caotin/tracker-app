import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, PubSub } from 'aws-amplify';
import awsconfig from "./aws-exports";
import { Map } from './components/Map';

import './App.css';

Amplify.configure(awsconfig);
PubSub.configure(awsconfig);
// Auth.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default withAuthenticator(App, {
  formFields: {
    signUp: {
      email: {
        order: 1,
      },
      password: {
        order: 2,
      },
      confirm_password: {
        order: 3,
      },
      phone_number: {
        order: 4,
      },
    },
  }
});
