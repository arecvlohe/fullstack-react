import React from 'react'

export default function App ({ todos, handleSubmit, input, handleInputChange }) {
  return (
    <div>
      <h1>Hello, SuncoastJS Developer!</h1>
      {todos.map((t, i) => {
        return <div key={`todo-${t.title.toLowerCase()}-${i}`}>{t.title}</div>
      })}
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={handleInputChange} /><br />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}
