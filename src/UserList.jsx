import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch ("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUsers (data)
            console.log (data)
        };
        fetchUsers()
    },[])

  return (
    <div>
        {
            users.map((user, index) => (
                <p key={index}>
                    <strong>{user.name}</strong>
                </p>
            ))
        }
    </div>
  )
}

export default UserList