import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import Home from "./components/Home"
import Games from "./components/Games"
import Stats from "./components/Stats"

function App() {

  return (
    <Router>
      <div className="App">
        <nav className="fixed-navbar">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/games">Games</Link>
            <Link className="links" to="/stats">Stats</Link>
        </nav>
      <Switch>
        <Route path="/games" component={Games}/>
        <Route path="/stats" component={Stats}/>
        <Route path="/" component={Home}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
