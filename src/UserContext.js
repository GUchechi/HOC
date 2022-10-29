import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserState = ({ children }) => {
    const [users, setUsers] = useState([]); 
    const [term, setTerm] = useState('');

    // Fetch the Data
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
      <UserContext.Provider value={{ users, setUsers, term, setTerm }}>
          {children}
      </UserContext.Provider>
   );
};