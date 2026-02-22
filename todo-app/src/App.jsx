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

    const [selectedTab, setSelectedTab] = useState('All');



    function handleCompleteTodo(index) {
        const newTodoList = [...todos]
        newTodoList[index].complete = true
        setTodos(newTodoList)
 
    }

    function handleDeleteTodo(index) {
        const newTodoList = todos.filter((val, valIndex) => {
            return valIndex !== index
        })
        setTodos(newTodoList)
    }
    
    return (
        <>
            <Header todos={todos}/>
            <Tabs 
                selectedTab={selectedTab} 
                setSelectedTab={setSelectedTab} 
                todos={todos}
            />
            <TodoList 
                selectedTab={selectedTab} 
                setSelectedTab={setSelectedTab} 
                todos={todos}
                handleDeleteTodo={handleDeleteTodo}
                handleCompleteTodo={handleCompleteTodo}
            />
            <TodoInput handleAddTodo={handleAddTodo}/>
        </>
    )
}

export default App
