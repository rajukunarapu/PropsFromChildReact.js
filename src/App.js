import {useState} from 'react'
import './App.css';
import Child from './Child';

function App() {

  let [Task,setTask] = useState([
    "Task1",
    "Task2"
  ])

  var PropsFromChild = (searchTask)=>{
    setTask([...Task,searchTask])
    return Task
  }

  return(
    <>
      <h1>This is parent component</h1>
      <Child add={PropsFromChild}></Child>
      <ul>
        {
          Task.map((t)=>{
            return(
              <li>{t}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App;
