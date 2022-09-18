import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({tasks, onDelete, handleDone}) => {
    
    
    
    return (
        <div className="taskList">
            {tasks.map((task) => {
               return <TaskItem key={task.id} 
                                task={task} 
                                onDelete={onDelete} 
                                handleDone={handleDone}
                       /> 
            })}
        </div>
    )
}

export default TaskList