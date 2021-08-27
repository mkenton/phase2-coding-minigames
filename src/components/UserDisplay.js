export default function UserDisplay({user, selectPlayer}) {

    function handleClick() {
        selectPlayer(user.id)
    }

    let className = ''

    user.currentPlayer === true ? className = 'active-user-class' : className = "user-class"

    return (
        <div onClick={handleClick} className={className}>
            <h2>{user.name}</h2>
            <p>id: {user.id}</p>
        </div>
    )
}