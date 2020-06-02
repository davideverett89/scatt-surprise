import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/shared/MyNavBar/MyNavBar';
import Home from '../components/pages/Home/Home';
import EditScat from '../components/pages/EditScat/EditScat';
import NewScat from '../components/pages/NewScat/NewScat';
import SingleScat from '../components/pages/SingleScat/SingleScat';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <h1>Scat Surprise</h1>
        <Auth />
        <Home />
        <EditScat />
        <NewScat />
        <SingleScat />
      </div>
    );
  }
}

export default App;
