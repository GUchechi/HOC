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
    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        {/* {
            users.map((user, index) => (
                <p key={index}>
                    <strong>{user.name}</strong>
                </p>
            ))
        } */}
        <div>{filterUsers}</div>
    </div>
  )
}

export default UserList