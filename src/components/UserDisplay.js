export default function UserDisplay({user, selectPlayer}) {

    function handleClick() {
        selectPlayer(user.id)
    }

    return (
        <div onClick={handleClick} className="user-class">
            <h2>{user.name}</h2>
            <p>id: {user.id}</p>
        </div>
    )
}