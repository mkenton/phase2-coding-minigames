import {useState} from 'react'

export default function NewUserForm({newUserSubmit}) {

    const [newUser, setNewUser] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(newUser)
        newUserSubmit(newUser)
    }

    return (
        <div>
            <h2>New Player</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter your name..."
                    id="nameInput"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}