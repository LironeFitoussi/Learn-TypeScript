// import {useState} from 'react'

import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

const App: React.FC = () => {
  const todos = [
      { id: 't1', text: "Learn React" },
      { id: 't2', text: "Learn TypeScript" },
  ];

  const todoAddHandler = (text: string) => {
    console.log(text)
  }

  return (
    <div className="pp">
      <h1>My Todos</h1>
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos}/>
    </div>
  )
}

export default App
