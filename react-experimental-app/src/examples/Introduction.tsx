export default function Introduction() {
  return (
    <div className="example">
      <p>
        Welcome to your React learning environment! This app is designed to help you
        experiment with React concepts from your freeCodeCamp courses.
      </p>

      <div className="example-section">
        <h3>How to Use This App</h3>
        <p>
          Click on any example in the sidebar to see different React concepts in action.
          Each example is self-contained and focuses on a specific React feature.
        </p>
      </div>

      <div className="example-section">
        <h3>How to Add Your Own Examples</h3>
        <ol style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
          <li>Create a new <code>.tsx</code> file in the <code>src/examples/</code> folder</li>
          <li>Write your React component (copy the structure from existing examples)</li>
          <li>Import it in <code>App.tsx</code></li>
          <li>Add it to the <code>examples</code> registry object in <code>App.tsx</code></li>
        </ol>
        <p>That's it! Your new example will appear in the sidebar automatically.</p>
      </div>

      <div className="example-section">
        <h3>What You'll Learn</h3>
        <ul style={{ textAlign: 'left', paddingLeft: '1.5rem', listStyle: 'disc' }}>
          <li><strong>Props:</strong> How to pass data between components</li>
          <li><strong>State:</strong> How to manage component data with useState</li>
          <li><strong>Lists:</strong> How to render arrays with .map()</li>
          <li><strong>Events:</strong> How to handle user interactions</li>
        </ul>
      </div>

      <p style={{ marginTop: '2rem', color: '#646cff', fontWeight: 'bold' }}>
        Ready to learn? Click on an example in the sidebar!
      </p>
    </div>
  )
}
