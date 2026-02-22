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

    function handleAddTodo(newTodo) {
        setTodos(prev => [
         ...prev,
        { id: crypto.randomUUID(), input: newTodo, complete: false }
        ]);
    }

    function handleCompleteTodo(id) {
        setTodos(prev =>
        prev.map(todo => todo.id === id ? { ...todo, complete: true } : todo)
    );
    }

function handleDeleteTodo(id) {
  setTodos(prev => prev.filter(todo => todo.id !== id));
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
