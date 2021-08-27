import {Route, Switch, NavLink, useRouteMatch} from "react-router-dom"
import Game1 from "./GameOne"
import Game2 from "./GameTwo"


export default function Games({increaseScore, users}) {
    let match = useRouteMatch();
    const isUser = users.filter((user) => user.currentPlayer === true ? user : '')
    // console.log(isUser)

    return (
        <div>
            <h1 className="component-header">Games</h1>


          <div className="game">
          <nav className= "game-navbar">
   
   <NavLink className="game-link" activeClassName="active-game" to={`${match.url}/game1`}>Game 1</NavLink>
   <NavLink className="game-link" activeClassName="active-game" to={`${match.url}/game2`}>Game 2</NavLink>

</nav>
          <p className="warning">{isUser.length === 0 ? 'WARNING: Must select a user before selecting a game!' : ''}</p>

              {isUser.length === 0 ? '' : 
              <Switch>

              <Route path={`${match.path}/game1`}>
                  <Game1 increaseScore={increaseScore} users={users}/>
              </Route>
              <Route path={`${match.path}/game2`}>
                  <Game2  users={users}/>
              </Route>
              </Switch>}

          </div>
        </div>
    )
}