import React, { useContext} from 'react'
import { UserContext } from './UserContext'

const TodoList = () => {
    const {todos, searchTodos, setSearchTodos} = useContext(UserContext)
    const filterTodos = todos
        .slice(0,10)
        .filter(({title}) => {
            return title.indexOf(searchTodos) >= 0;
    }).map((todo) => (
       <div key={todo.id}>
         <p>
            <strong>{todo.title.slice(0,20)}</strong>
        </p>
       </div>
    ))
    

  return (
    <div>
    <h1>Todos</h1>
    <input type="text" value={searchTodos} onChange={(e) => setSearchTodos(e.target.value)} />
        <div>{filterTodos}</div>
    </div>
  )
}

export default TodoList