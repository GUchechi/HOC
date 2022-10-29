import './App.css';
import { UserState } from './UserContext';
import UserList from './UserList';

function App() {
  return (
    <UserState>
      <div className="App">
        <h2>HIGHER ORDER COMPONENT</h2>
        <div className="section">
          <UserList />
        </div>
    </div>
    </UserState>
  );
}

export default App;
