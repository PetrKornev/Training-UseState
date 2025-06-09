import { useState } from "react";


const ToDoList = () => {
    const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);
    
    const [inputValue, setInputValue] = useState ('')

    const newTaskFromUser = () => {
        setTasks ((oldTask) => [...oldTask, inputValue])
        setInputValue ('')
    }
    const deleteLast = () => {
        setTasks(() => tasks.slice(0, -1))
    }
    return <>
        <h1>Список задач</h1>
        <input 
        type = 'text'
        placeholder="Введите свою задачу"
        value = {inputValue}
        onChange={(e) => setInputValue(e.target.value)}>
        </input>
        <ul>
            {tasks.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
        <button onClick={newTaskFromUser}>Добавить задачу</button>
        <button onClick={deleteLast}>Удалить последнюю задачу</button>
    </>
}




export default ToDoList