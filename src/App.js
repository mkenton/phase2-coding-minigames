import { Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom"
import Home from "./components/Home"
import Games from "./components/Games"
import Stats from "./components/Stats"

function App() {

  return (
    <Router>
      <div className="App">
        <nav className="fixed-navbar">
          <NavLink exact activeClassName="active-nav" className="links" to="/">Home</NavLink>
          <NavLink activeClassName="active-nav" className="links" to="/games">Games</NavLink>
          <NavLink activeClassName="active-nav" className="links" to="/stats">Stats</NavLink>
        </nav>
        <Switch>
          <Route path="/games" component={Games} />
          <Route path="/stats" component={Stats} />
          <Route exact path="/" component={Home} />
          <Route path="*">
            <h1 className="page-not-found">404 Page Not Found :(</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
