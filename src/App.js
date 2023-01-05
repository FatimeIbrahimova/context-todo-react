
// import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Input from './components/Input';

function App() {
  // const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Input/>
      <Board/>
    </div>
  );
}

export default App;
