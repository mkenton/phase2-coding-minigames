
import { Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom"

import React, {useState, useEffect} from 'react';

import Home from "./components/Home"
import Games from "./components/Games"
import Stats from "./components/Stats"

const API = `http://localhost:8001/users`
function App() {

  const [users, setUsers] = useState([]) 

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setUsers(data))
  }, [])

  function newUserSubmit(name) {
      fetch(API, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
          "id" : `${users.length + 1}`,
          "name" : name,
          "game1" : 0,
          "game2" : 0,
        })
      })
      .then(r => r.json())
      .then(data => setUsers([...users, data]))
  }

  function selectPlayer(id) {
    setUsers(users.map((user) => user.id === id ? {...user, 'currentPlayer' : true} : {...user, 'currentPlayer' : false}))
    console.log(users)
  }

  function increaseScore(game, score) {

    console.log(game)
    console.log(score)
    const currentPlayer = users.filter((user) => user.currentPlayer)
    // const newScore = currentPlayer[0][game] < score ? score : currentPlayer[0][game]
    console.log(currentPlayer)
    // const newScore = currentPlayer[0][game] + 1
    // console.log(newScore)
    setUsers(users.map((user) => user.id === currentPlayer[0].id ? {...user, game : score} : user))
    console.log(users)
    fetch(`${API}/${currentPlayer[0].id}`, {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        "currentPlayer" : true,
        [game] : score
      })
    })
    .then(r => r.json())
    .then(data => setUsers(users.map((user) => data.id === user.id ? data : user)))
}

  return (
    <Router>
      <div className="App">
        <nav className="fixed-navbar">
          <NavLink exact activeClassName="active-nav" className="links" to="/">Home</NavLink>
          <NavLink activeClassName="active-nav" className="links" to="/games">Games</NavLink>
          <NavLink activeClassName="active-nav" className="links" to="/stats">Stats</NavLink>
        </nav>

      <Switch>
        <Route path="/games">
          <Games increaseScore={increaseScore} users={users}/>
        </Route>
        <Route path="/stats">
          <Stats users={users} />
        </Route>
        <Route exact path="/">
          <Home newUserSubmit={newUserSubmit} users={users} selectPlayer={selectPlayer} />
        </Route>
        <Route path ="*"><h1 className="page-not-found">404 Page Not Found :(</h1></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
