export default function StatsDisplay({user}) {

    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.game1}</td>
            <td>{user.game2}</td>
        </tr>
    )
}