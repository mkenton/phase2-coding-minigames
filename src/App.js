import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import React, {useState, useEffect} from 'react';
import Home from "./components/Home"
import Games from "./components/Games"
import Stats from "./components/Stats"

function App() {

  const [users, setUsers] = useState([]) 

  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(r => r.json())
    .then(data => setUsers(data))
  }, [])

  function newUserSubmit(name) {
      fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
          "id" : `${users.length + 1}`,
          "name" : name,
          "game1" : 0,
          "game2" : 0
        })
      })
      .then(r => r.json())
      .then(data => setUsers([...users, data]))
  }

  function selectPlayer(id) {
    setUsers(users.map((user) => user.id === id ? {...user, 'currentPlayer' : true} : {...user, 'currentPlayer' : false}))
    console.log(users)
  }

  function increaseScore(game) {

    console.log(game)
    const currentPlayer = users.filter((user) => user.currentPlayer)
    console.log(currentPlayer)
    const newScore = currentPlayer[0][game] + 1
    console.log(newScore)
    setUsers(users.map((user) => user.id === currentPlayer[0].id ? {...user, game : newScore} : user))
    console.log(users)
    fetch(`http://localhost:3000/users/${currentPlayer[0].id}`, {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        "currentPlayer" : true,
        [game] : newScore
      })
    })
    .then(r => r.json())
    .then(data => setUsers(users.map((user) => data.id === user.id ? data : user)))
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
          <Games increaseScore={increaseScore} />
        </Route>
        <Route path="/stats">
          <Stats users={users} />
        </Route>
        <Route path="/">
          <Home newUserSubmit={newUserSubmit} users={users} selectPlayer={selectPlayer} />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
