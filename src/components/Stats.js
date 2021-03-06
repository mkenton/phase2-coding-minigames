import StatsDisplay from "./StatsDisplay"

export default function Stats({users}) {
    return (
        <div>
          <h1 className="component-header">High Scores</h1>
          <div className="stats-div">
              <table className="stats">
                  <tr>
                      <th>User</th>
                      <th>Game 1</th>
                      <th>Game 2</th>
                  </tr>
                      {users.map((user) => <StatsDisplay user={user} key={user.id} />)}
              </table>
          </div>
        </div>
    )
}