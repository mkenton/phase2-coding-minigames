import {Route, Switch, Link, useRouteMatch} from "react-router-dom"
import Game1 from "./GameOne"
import Game2 from "./GameTwo"

export default function Games() {
    let match = useRouteMatch();

    return (
        <div>
            <h1 className="games">Games</h1>
            <nav>
                <ul>
                    <li className="links"><Link to={`${match.url}/game1`}>Game 1</Link></li>
                    <li className="links"><Link to={`${match.url}/game2`}>Game 2</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path={`${match.path}/game1`}>
                    <Game1/>
                </Route>
                <Route path={`${match.path}/game2`}>
                    <Game2/>
                </Route>
            </Switch>
        </div>
    )
}