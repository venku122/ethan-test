import React, { FunctionComponent, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalToDoList, {ToDo} from './FunctionalToDoList';


const initialToDos = [
  {task: 'test1', status: 'toDo'},
  {task: 'test2', status: 'toDo'},
  {task: 'test3', status: 'toDo'},
  {task: 'test4', status: 'toDo'},
  {task: 'test5', status: 'toDo'},
];

async function getToDos() {
  return initialToDos;
}


const App: FunctionComponent = () => {

  const [toDoList, setToDos ] = useState<ToDo[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const toDosFromApi = await getToDos();
      setTimeout(() => {
        setToDos(toDosFromApi)
        setLoading(false);
      }, 5000);
    }
    fetchData()
  }, [])

  function updateToDo(taskId: string, newStatus: string) {
    const newToDos = [...toDoList];
    const toDoToUpdate = newToDos.findIndex((toDo) => toDo.task === taskId);
    newToDos[toDoToUpdate].status = newStatus;
    setToDos(newToDos);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {isLoading && "isLoading"}
        {!isLoading && <FunctionalToDoList toDos={toDoList} updateToDo={updateToDo} />}
      </header>
    </div>
  );
}

export default App;
