import logo from './logo.svg';
import { Todo } from "./components/Todo";
import './App.css';

function App() {
  return (
    <div className="App">
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      <Todo></Todo>
    </div>
  );
}

export default App;
