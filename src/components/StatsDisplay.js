export default function StatsDisplay({user}) {

    return (
        <tr>
            <td>{user.name}</td>
            <td>{user["game 1 score"]}</td>
            <td>{user["game 2 score"]}</td>
        </tr>
    )
}