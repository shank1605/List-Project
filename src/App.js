import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import DeleteALL from './components/deleteall';
import Todoheader from './components/header';
function App() {
  return (
    <div className="App m-5">
      <Todoheader/>
      <TodoInput/>
      <TodoList/>
      <DeleteALL/>
    </div>
  );
}

export default App;
