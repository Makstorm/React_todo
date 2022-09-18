import React from "react";

const TaskItem =  ({task, onDelete, handleDone}) => {
    
    const classes = []

    if (task.completed) {
        classes.push('done')
    }
    
    return (
        <div className="toDoItem">
            <input type='checkbox' onChange={()=> {
                handleDone(task.id)
            }}/>
            <h2 className={classes.join(' ')}>{task.title}</h2>
            <h4>-{task.description}</h4>
            <button onClick={() => onDelete(task.id)}>X</button>
        </div>
        
    )
}

export default TaskItem