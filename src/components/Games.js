import {Route, Switch, NavLink, useRouteMatch} from "react-router-dom"
import Game1 from "./GameOne"
import Game2 from "./GameTwo"

export default function Games({increaseScore}) {
    let match = useRouteMatch();

    return (
        <div>
            <h1 className="component-header">Games</h1>
            <nav className= "game-navbar">
   
                    <NavLink className="links" activeClassName="active-game" to={`${match.url}/game1`}>Game 1</NavLink>
                    <NavLink className="links" activeClassName="active-game" to={`${match.url}/game2`}>Game 2</NavLink>
               
            </nav>
            <Switch>
                <Route path={`${match.path}/game1`}>
                    <Game1 increaseScore={increaseScore} />
                </Route>
                <Route path={`${match.path}/game2`}>
                    <Game2 increaseScore={increaseScore} />
                </Route>
            </Switch>
        </div>
    )
}