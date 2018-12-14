import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Layout>
            <Route exact path={'/home'} component={Home} />
            <Route exact path={'/contacts'} component={Contacts} />
            <Route exact path={'/'} component={Home} />
          </Layout>
      </div>
    );
  }
}

export default App;
