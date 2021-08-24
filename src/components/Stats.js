import StatsDisplay from "./StatsDisplay"

export default function Stats({users}) {
    return (
        <div className="stats-class">
            <table>
                <tr>
                    <th>User</th>
                    <th>Game 1</th>
                    <th>Game 2</th>
                </tr>
                    {users.map((user) => <StatsDisplay user={user} key={user.id} />)}
            </table>
        </div>
    )
}