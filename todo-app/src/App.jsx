import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"




function App() {
    // const todos = [
    //     {input: "complet4ed1", complete: true},
    //     {input: "complet4ed2", complete: true},
    //     {input: "open1", complete: false},
    //     {input: "open2", complete: false},
    // ]

    const [todos, setTodos] = useState([]) // react hook

    function handeAddTodo(newTodo) {
        const newTodoList = [...todos, { input: newTodo, complete: false }]
        setTodos(newTodoList)

    }

    function handleEditTodo() {

    }

    function handleDeleteTodo() {

    }
    
    return (
        <>
            <Header todos={todos}/>
            <Tabs todos={todos}/>
            <TodoList todos={todos}/>
            <TodoInput handeAddTodo={handleAddTodo}/>
        </>
    )
}

export default App
