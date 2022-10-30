import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserState = ({ children }) => {
    const [users, setUsers] = useState([]); 
    const [term, setTerm] = useState('');
    const [todos, setTodos] = useState([]);
    const [searchTodos, setSearchTodos] = useState('');

    // Fetch the users
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch ("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUsers (data)
        };
        fetchUsers()
    },[])

    // Fetch TodoList
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch ("https://jsonplaceholder.typicode.com/todos")
            const data = await response.json()
            setTodos(data)
        };
        fetchTodos()
    },[])

   return (
      <UserContext.Provider value={{ users, setUsers, term, setTerm, todos, setTodos,searchTodos, setSearchTodos }}>
          {children}
      </UserContext.Provider>
   );
};