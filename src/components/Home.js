import UserDisplay from "./UserDisplay"
import NewUserForm from "./NewUserForm"

export default function Home({users, newUserSubmit}) {

    return (

        <div>
            <h1 className="component-header">Home</h1>
            <div className="home">
              <h2>Who's Playing?</h2>
              {users.map((user) => <UserDisplay user={user} key={user.id} />)}
              <NewUserForm newUserSubmit={newUserSubmit} />
           </div>

        </div>
    )
}