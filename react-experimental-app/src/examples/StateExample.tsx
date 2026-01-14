import { useState } from 'react'

export default function StateExample() {
  // State example 1: Number counter
  const [count, setCount] = useState(0)

  // State example 2: Text input
  const [text, setText] = useState('')

  // State example 3: Boolean toggle
  const [isVisible, setIsVisible] = useState(true)

  // State example 4: Object
  const [user, setUser] = useState({ name: 'Guest', points: 0 })

  return (
    <div className="example">
      <p>
        <strong>State</strong> is data that a component manages internally. When state changes,
        React automatically re-renders the component to show the updated data.
      </p>

      {/* Example 1: Counter */}
      <div className="example-section">
        <h3>1. Number State (Counter)</h3>
        <p>Current count: <strong>{count}</strong></p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>
          <code>useState(0)</code> creates state with initial value 0
        </p>
      </div>

      {/* Example 2: Text Input */}
      <div className="example-section">
        <h3>2. String State (Text)</h3>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: '300px', marginBottom: '0.5rem' }}
        />
        <p>You typed: <strong>{text || '(nothing yet)'}</strong></p>
        <p>Character count: <strong>{text.length}</strong></p>
        <button onClick={() => setText('')}>Clear</button>
        <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>
          <code>onChange</code> event updates state as you type
        </p>
      </div>

      {/* Example 3: Boolean Toggle */}
      <div className="example-section">
        <h3>3. Boolean State (Toggle)</h3>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? 'Hide' : 'Show'} Message
        </button>
        {isVisible && (
          <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(100, 108, 255, 0.2)', borderRadius: '5px' }}>
            This message is conditionally rendered based on state!
          </p>
        )}
        <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>
          <code>{'{isVisible && <p>...</p>}'}</code> - conditional rendering with &&
        </p>
      </div>

      {/* Example 4: Object State */}
      <div className="example-section">
        <h3>4. Object State</h3>
        <p>Name: <strong>{user.name}</strong></p>
        <p>Points: <strong>{user.points}</strong></p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button onClick={() => setUser({ ...user, name: 'Player' })}>
            Change Name to "Player"
          </button>
          <button onClick={() => setUser({ ...user, points: user.points + 10 })}>
            Add 10 Points
          </button>
          <button onClick={() => setUser({ name: 'Guest', points: 0 })}>
            Reset
          </button>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>
          <code>{'{...user, name: "Player"}'}</code> - spread operator creates a new object
        </p>
      </div>

      {/* Key Concepts */}
      <div className="example-section">
        <h3>Key Takeaways</h3>
        <ul style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
          <li><strong>useState</strong> hook creates state with an initial value</li>
          <li>Returns an array: <code>[currentValue, setterFunction]</code></li>
          <li>Call the setter function to update state</li>
          <li>State updates trigger a re-render of the component</li>
          <li>Each component has its own independent state</li>
          <li>For objects/arrays, create a new copy when updating (don't mutate directly)</li>
        </ul>
      </div>
    </div>
  )
}
