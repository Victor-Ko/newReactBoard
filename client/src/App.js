import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
        users: [],
        titles: [],
        text : []
    };

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
        /*
        fetch('/redvelvet')
            .then(res => res.json())
            .then(titles => this.setState({ titles }));

        fetch('/test')
            .then(res => res.json())
            .then(test => this.setState({ test }));
        */
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

            <h1>Users</h1>
            {this.state.users.map(user =>
                <div key={user.id}>{user.username}</div>
            )}

            <h1>test</h1>
            {this.state.test ? this.state.test.map(movie =>
                <div key={movie.id}>{movie.text}</div>
            ) : "loding"}

        </header>
      </div>
    );
  }
}

export default App;
