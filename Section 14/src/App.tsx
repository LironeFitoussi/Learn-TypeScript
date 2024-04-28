import React from 'react'

import TodoList from './components/TodoList'


const App: React.FC = () => {
  const todos = [
      { id: 't1', text: "Learn React" },
      { id: 't2', text: "Learn TypeScript" },
  ];
  
  return (
    <div className="pp">
      <h1>My Todos</h1>
      {/* A component that add todos */}
      <TodoList items={todos}/>
    </div>
  )
}

export default App
