import {useState, useEffect} from 'react';
import "./TasksList.css";
import Spinner from './Spinner';

const TasksList = () => {
  // Seteamos estados:
  const [loading, setLoading] = useState(false); // estado para manejar el círculo de carga
  const [message, setMessage] = useState(""); // estado para manejar mensajes
  const [taskNumber, setTaskNumber] = useState(""); // estado para manejar el número de tarea a cambiar
  const [showCompletedTasks, setShowCompletedTasks] = useState(false); // estado para manejar la lista de tareas completadas
  const [tasksList, setTasksList] = useState([]); // estado para manejar la lista de tareas general

  const BASE_URL = "https://jsonplaceholder.typicode.com/todos";
  const filteredTasks = showCompletedTasks ? tasksList.filter(task => task.completed) : tasksList;

  useEffect(() => {
    const fetchData = async () => {
      
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));

      try {
        
        const resData = await fetch(BASE_URL);
        
        if(!resData.ok){
          throw new Error("Error al consultar con la API.");
        }

        const tasksData = await resData.json();

        setTasksList(tasksData);


      } catch (error) {
        setMessage("Error al obtener los datos.");

      } finally {
        setLoading(false);
      }

    }

    fetchData();

  }, [])

 const handleCompletedTasks = () => {
  setShowCompletedTasks(prev => !prev);
 }

const handleChangeState = () => {

  const number = Number(taskNumber)

  if (!number) return;

  const updatedTasks = tasksList.map(task => {

    if (task.id === number) {
      return { ...task, completed: !task.completed }
    }

    return task;
  });

  setTasksList(updatedTasks);
}

  if(loading){
    return <Spinner color="green"/>
  }

  if(message){
    return <p>{message}</p>
  }
  
  return (
    <>
      <ul className="tasks-list">
          
        {filteredTasks.slice(0, 10).map(task => (
          <li key={task.id}>
            {task.id} - {task.title} - {task.completed ? "Completada ✅" : "Pendiente ❌"}
          </li>
        ))}

      </ul>

      <button onClick={handleCompletedTasks}>
        {showCompletedTasks ? "Mostrar todas las tareas" : "Mostrar solo tareas completadas"}
      </button>
      
      <div>
        <input 
        type="number" 
        value={taskNumber}
        onChange={(e) => setTaskNumber(e.target.value)}
        placeholder="Ingrese número de tarea a modificar"
        />
        <button onClick={handleChangeState}>Cambiar estado de tarea</button>
      </div>
    </>
  )
}

export default TasksList