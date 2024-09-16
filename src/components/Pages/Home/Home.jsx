import { useContext } from "react"
import { Header } from "../../Layouts/Header/Header"
import { Main } from "../../Layouts/Main/Main"
import { ContainerTasks } from "../../Layouts/ContainerTasks/ContainerTasks"
import { ItemTask } from "../../ItemTask/ItemTask"
import { TasksContext } from "../../Context/Context"
import { NewTask } from "../../NewTask/NewTask"
import { InfoTasks } from "../../Layouts/InfoTasks/InfoTasks"
import { FilterTasks } from "../../FilterTasks/FilterTasks"



export const Home = () => {

  const context = useContext(TasksContext)

  return (
    <>
      <Header>
          <h1>Gestor de tareas</h1>
          <NewTask/>
      <InfoTasks/>
      <FilterTasks/>
      </Header>
      <Main>
          <ContainerTasks>
            {
              
              context.filteredTasks.map( task => <ItemTask key={task.id} idTask={task.id}  content={task.description} titleTasks={task.title}/>   )
            }
          </ContainerTasks> 
      </Main>
    </>
  )
}


