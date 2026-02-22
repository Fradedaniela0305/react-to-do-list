
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"

import { useState, useEffect } from 'react'




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
  const newTodos = [
    ...todos,
    { id: crypto.randomUUID(), input: newTodo, complete: false }
  ];

  setTodos(newTodos);
  handleSave(newTodos);
}

function handleCompleteTodo(id) {
  const newTodos = todos.map(todo =>
    todo.id === id ? { ...todo, complete: true } : todo
  );

  setTodos(newTodos);
  handleSave(newTodos);
}

function handleDeleteTodo(id) {
  const newTodos = todos.filter(todo => todo.id !== id);

  setTodos(newTodos);
  handleSave(newTodos);
}

function handleSave(currTodos) {
  localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }));
}

    useEffect(() => {
        if (!localStorage) {return}
        let db = []
        if (localStorage.getItem('todo-app')) {
            db = JSON.parse(localStorage.getItem('todo-app'))
            setTodos(db.todos)
        }
    }, [])

    
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
