import React, { useContext, useEffect } from 'react'
import { TasksContext } from '../../Context/Context'
import './infoTasks.css'



export const InfoTasks = () => {

  const context = useContext(TasksContext)

  useEffect(() =>{
    
    let pending = context.tasks.filter( tasks => tasks.status === false )
    let resolve = context.tasks.filter( tasks => tasks.status === true )

    context.setPedingTasks(pending.length)
    context.setDoneTasks(resolve.length)

  },[context.tasks])

  return(
    <>    
      <h2 className='info-tasks'>Usted tiene  <span className='task-pending'>{context.pedingTasks}</span> pendientes y <span className='task-done'>{context.doneTasks}</span> terminadas </h2>
      <hr />
    </>
  )
} 
