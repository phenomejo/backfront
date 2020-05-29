import React, { useEffect, useState } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/getUser')
      setUser(res.data)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-success">
          User: { user.firstName } { user.lastName }
        </p>
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
      </header>
    </div>
  );
}

export default App;
