import { useState } from 'react'

// Type definition for a todo item
interface TodoItem {
  id: number
  task: string
  completed: boolean
}

export default function ListsExample() {
  // State: Array of todo items
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, task: 'Learn about Props', completed: true },
    { id: 2, task: 'Learn about State', completed: true },
    { id: 3, task: 'Learn about Lists', completed: false },
    { id: 4, task: 'Build something cool', completed: false }
  ])

  // State: New todo input
  const [newTodo, setNewTodo] = useState('')

  // Toggle a todo's completed status
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim() === '') return

    const newItem: TodoItem = {
      id: Date.now(), // Simple way to generate unique ID
      task: newTodo,
      completed: false
    }

    setTodos([...todos, newItem])
    setNewTodo('') // Clear input
  }

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="example">
      <p>
        <strong>Rendering Lists</strong> in React uses the JavaScript <code>.map()</code> method.
        Each item needs a unique <code>key</code> prop to help React track changes efficiently.
      </p>

      {/* Add new todo */}
      <div className="example-section">
        <h3>Add a New Todo</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            placeholder="Enter a new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            style={{ flex: 1 }}
          />
          <button onClick={addTodo}>Add</button>
        </div>
      </div>

      {/* Todo list */}
      <div className="example-section">
        <h3>Todo List ({todos.length} items)</h3>

        {todos.length === 0 ? (
          <p style={{ color: '#888', fontStyle: 'italic' }}>No todos yet. Add one above!</p>
        ) : (
          <ul>
            {/* This is the key part: .map() to render each item */}
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={todo.completed ? 'completed' : ''}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span>{todo.task}</span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  style={{ fontSize: '0.9rem', padding: '0.3rem 0.6rem' }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Statistics */}
      <div className="example-section">
        <h3>Statistics</h3>
        <p>Total tasks: <strong>{todos.length}</strong></p>
        <p>Completed: <strong>{todos.filter(t => t.completed).length}</strong></p>
        <p>Remaining: <strong>{todos.filter(t => !t.completed).length}</strong></p>
      </div>

      {/* Key Concepts */}
      <div className="example-section">
        <h3>Key Takeaways</h3>
        <ul style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
          <li>Use <code>.map()</code> to render an array of items</li>
          <li>Each item needs a unique <code>key</code> prop (use ID, not index)</li>
          <li><code>.filter()</code> is great for removing items from arrays</li>
          <li><code>.map()</code> with conditionals can update specific items</li>
          <li>Use spread operator <code>[...array, newItem]</code> to add items</li>
          <li>Conditional rendering: <code>{'{todos.length === 0 ? <p>...</p> : <ul>...</ul>}'}</code></li>
        </ul>
      </div>
    </div>
  )
}
