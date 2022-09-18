import React, {useState} from "react";

const NewTask = ({onSubmit}) => {
    
    const [newTask, setNewTask] = useState({})
    
    const handleChange = ({target}) => {
        const {name, value} = target
        setNewTask((prev) => ({...prev, id: Date.now(), completed: false, [name]: value}))
    }

    const Submit = (e) => {
        e.preventDefault();
        if(!newTask.title) return
        onSubmit(newTask)
        setNewTask({})
    }

    return (
        <div className="newTask">
            <input 
                name="title" 
                placeholder="Введите название" 
                value={newTask.title || ''} 
                onChange={handleChange} 
            />
            {!newTask.title ? null : (
                <>
                    <textarea 
                        name="description"
                        placeholder="Детали..."
                        value={newTask.description}
                        onChange={handleChange}
                    />
                    <button type="submit" onClick={Submit}>Добавить задание</button>
                </>
            )}
        </div>
    )
}

export default NewTask