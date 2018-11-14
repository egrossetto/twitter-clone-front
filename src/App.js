import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Feed from './components/feed';
import Login from './components/login';
import AppBar from './components/appBar'

class App extends Component {
  render() {
    let token = sessionStorage.getItem('token');

    return (
      <div>
        <AppBar />
        <BrowserRouter>
        {
          token ?
            <div>
              <Route exact path={'/'} component={Feed}/>
            </div>
            :
            <div>
              <Login />
            </div>
        }        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;