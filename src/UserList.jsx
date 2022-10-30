import React, { useContext} from 'react'
import { UserContext } from './UserContext'

const UserList = () => {
    const {users, term, setTerm} = useContext(UserContext)
    const filterUsers = users.filter(({name}) => {
        return name.indexOf(term) >= 0;
    }).map((user, index) => (
        <p key={index}>
            <strong>{user.name}</strong>
        </p>
    ))
    

  return (
    <div>
    <h1>Users</h1>
    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        <div>{filterUsers}</div>
    </div>
  )
}

export default UserList