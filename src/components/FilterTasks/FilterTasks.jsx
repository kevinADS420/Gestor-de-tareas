
import { useContext } from 'react'
import { TasksContext } from '../Context/Context'
import './FilterTasks.css';


export const FilterTasks = () => {
  const context = useContext(TasksContext)

  const handleFilter = (event) => {
    let currentOption = event.target.value
    console.log(`${currentOption}`)
    if (currentOption === 'Pendientes') {
      context.setFilteredTasks(context.tasks.filter(task => !task.status) )
    }else if ( currentOption === 'Realizadas') {
      context.setFilteredTasks(context.tasks.filter(task => task.status) )
    }else{
      context.setFilteredTasks(context.tasks)
    } 
  }
  
  return (
    <div className='container-filters'>
      <label >Filtrar por </label>
      <select onChange={handleFilter}> 
        <option value="Todas" className='opt opt1'>Todas</option>
        <option value="Pendientes" className='opt opt2'>Pendientes</option>
        <option value="Realizadas" className='opt opt3'>Realizadas</option>
      </select>

    </div>
  )
}
