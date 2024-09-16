import {  createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const TasksContext = createContext ()


const tsk = [
  { id: uuidv4(), title: 'Tarea de ejemplo 1', description: 'Descripción pendiente1',status: false },          
  { id: uuidv4(), title: 'Tarea de ejemplo 2', description: 'Descripción pendiente2',status: true },          
  { id: uuidv4(), title: 'Tarea de ejemplo 3', description: 'Descripción pendiente3',status: true }          
]

export const TasksProvider = ({children}) => {

  const [ tasks, setTasks ] = useState (tsk)
  const [ filteredTasks, setFilteredTasks ] = useState (tsk)
  const [ pedingTasks, setPedingTasks] = useState(0)
  const [ doneTasks, setDoneTasks ] = useState(0);


  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(prevTasks => 
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  
  return (
    <>
      <TasksContext.Provider value={{ 
        tasks, 
        setTasks,
        pedingTasks,
        setPedingTasks,
        doneTasks,
        setDoneTasks,
        filteredTasks,
        setFilteredTasks,
        updateTaskStatus
      }}>
        {children}
      </TasksContext.Provider>

    </>
  )

}

