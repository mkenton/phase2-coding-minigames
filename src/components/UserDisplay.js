export default function UserDisplay({user}) {

    return (
        <div className="user-class">
            <h2>{user.name}</h2>
            <p>id: {user.id}</p>
        </div>
    )
}