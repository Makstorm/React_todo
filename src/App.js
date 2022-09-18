import React, { useState } from "react";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'Сходить в магазин',
      description: 'Купить маму',
      id: 1,
      completed: false
    },
    { 
      title: 'Сходить в магазин', 
      description: 'Купить папу', 
      id: 2,
      completed: false
    },
    {
      title: 'Сходить в магазин', 
      description: 'Купить могз даун', 
      id: 3,
      completed: false
    }])
  
  const addNewTask = (newTask) => setTasks((prev) => [...prev, newTask])  
  
  const handleDelete = (TaskIdToDelete) => {
    setTasks((prev) => prev.filter((task) => task.id !== TaskIdToDelete))
  }

  const handleDone = (DoneTaskId) => {
    // console.log(DoneTaskId)
    setTasks(tasks.map(task => {
      if(task.id === DoneTaskId) {
        task.completed = !task.completed
      }
      return task
    }))
    
    // setTasks((prev) => prev.map(task => {
    //   console.log(DoneTaskId)
    //   if(task.id === DoneTaskId) {
    //     task.completed = !task.completed
    //   }
    //   console.log(task)
    //   return task
    // }))
  }

  return (
    <div className='container'>
      <header>
        <h1>React ToDo List</h1> 
      </header>

      <NewTask onSubmit={addNewTask}/>
      <TaskList tasks={tasks} 
                onDelete={handleDelete} 
                handleDone={handleDone}
      />
    </div>
  );
}

export default App;
