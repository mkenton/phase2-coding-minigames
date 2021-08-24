import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import React, {useState, useEffect} from 'react';
import Home from "./components/Home"
import Games from "./components/Games"
import Stats from "./components/Stats"

function App() {

  const [users, setUsers] = useState([]) 

  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then(r => r.json())
    .then(data => setUsers(data))
  }, [])

  function newUserSubmit(name) {
      fetch('http://localhost:3001/users', {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
          "id" : `${users.length + 1}`,
          "name" : name,
          "game 1 score" : 0,
          "game 2 score" : 0
        })
      })
      .then(r => r.json())
      .then(data => setUsers([...users, data]))
  }

  return (
    <Router>
      <div className="App">
        <nav className="fixed-navbar">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/games">Games</Link>
            <Link className="links" to="/stats">Stats</Link>
        </nav>
      <Switch>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/stats">
          <Stats users={users} />
        </Route>
        <Route path="/">
          <Home newUserSubmit={newUserSubmit} users={users}/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
