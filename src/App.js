import './App.css';
import TodoList from './TodoList';
import { UserState } from './UserContext';
import UserList from './UserList';

function App() {
  return (
    <UserState>
      <div className="App">
        <h2>HIGHER ORDER COMPONENT</h2>
        <div className="section">
          <UserList />
          <TodoList />
        </div>
    </div>
    </UserState>
  );
}

export default App;
