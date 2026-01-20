import { useState } from 'react'

// Child component that receives props - Props are like arguments passed to a function
function Greeting({ name, age }: { name: string; age: number }) {
  return (
    <div className="example-section">
      <h3>Greeting Component</h3>
      <p>Hello, {name}! You are {age} years old.</p>
      <p style={{ fontSize: '0.9rem', color: '#888' }}>
        This component received <code>name</code> and <code>age</code> as props.
      </p>
    </div>
  )
}

function WelcomeMessage({ message, highlight }: { message: string; highlight: boolean }) {
  return (
    <div className="example-section">
      <h3>Welcome Message Component</h3>
      <p style={{
        color: highlight ? '#646cff' : 'inherit',
        fontWeight: highlight ? 'bold' : 'normal'
      }}>
        {message}
      </p>
      <p style={{ fontSize: '0.9rem', color: '#888' }}>
        This component uses the <code>highlight</code> prop to change styling.
      </p>
    </div>
  )
}

// Parent component that manages state and passes it as props
export default function PropsExample() {
  const [userName, setUserName] = useState('React Learner')
  const [userAge, setUserAge] = useState(25)
  const [isHighlighted, setIsHighlighted] = useState(false)

  return (
    <div className="example">
      <p>
        <strong>Props</strong> are how you pass data from a parent component to a child component.
        Think of them like function arguments - you pass values in, and the child component uses them.
      </p>
      <Greeting name={userName} age={userAge} />

      <WelcomeMessage
        message="Welcome to learning about props!"
        highlight={isHighlighted}
      />
      <div className="example-section">
        <h3>Try It Out!</h3>
        <p>Change the values below to see how props update the child components:</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <div>
            <label htmlFor="name-input" style={{ marginRight: '0.5rem' }}>Name:</label>
            <input
              id="name-input"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="age-input" style={{ marginRight: '0.5rem' }}>Age:</label>
            <input
              id="age-input"
              type="number"
              value={userAge}
              onChange={(e) => setUserAge(Number(e.target.value))}
              style={{ width: '100px' }}
            />
          </div>

          <div>
            <button onClick={() => setIsHighlighted(!isHighlighted)}>
              Toggle Highlight: {isHighlighted ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>Key Takeaways</h3>
        <ul style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
          <li>Props flow <strong>down</strong> from parent to child (one-way data flow)</li>
          <li>Props are <strong>read-only</strong> - child components can't modify them</li>
          <li>When props change, React re-renders the child component automatically</li>
          <li>Props can be any data type: strings, numbers, booleans, objects, functions, etc.</li>
        </ul>
      </div>
    </div>
  )
}
