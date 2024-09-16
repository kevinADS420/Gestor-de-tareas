import { useContext } from 'react';
import { TasksContext } from '../Context/Context';
import './ItemTask.css';


export const ItemTask = ({idTask, content, titleTasks}) => {
 
  const { tasks, updateTaskStatus  } =  useContext(TasksContext)

  const task = tasks.find( tasks =>  tasks.id === idTask)

  const handleCheckboxChange = ()=> {
    updateTaskStatus (idTask, !task.status);  
  }

  return (
    
    <li id={idTask} className={task.status ? "item-task checked" : "item-task"} >
      
    <div className={task.status ? "circle-state circle-green" : "circle-state" }></div>

    <h2>{titleTasks}</h2>
    <p>{content}</p>

    <input type="checkbox" checked={task.status} onChange={handleCheckboxChange} />  
    <label for="tick"></label>

    </li>
  )
}