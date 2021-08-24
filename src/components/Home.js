import UserDisplay from "./UserDisplay"
import NewUserForm from "./NewUserForm"

export default function Home({users, newUserSubmit, selectPlayer}) {

    return (
        <div className="home">
            <h2>Who'se Playing?</h2>
            {users.map((user) => <UserDisplay user={user} key={user.id} selectPlayer={selectPlayer} />)}
            <NewUserForm newUserSubmit={newUserSubmit} />
        </div>
    )
}