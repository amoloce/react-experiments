import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Introduction from './examples/Introduction'
import PropsExample from './examples/PropsExample'
import StateExample from './examples/StateExample'
import ListsExample from './examples/ListsExample'

function App() {
  // State to track which example is currently selected
  const [selectedExample, setSelectedExample] = useState<string>('introduction')

  // Registry of all available examples
  // Add new examples here as you create them!
  const examples: Record<string, { title: string; component: React.ComponentType }> = {
    'introduction': {
      title: 'Welcome',
      component: Introduction
    },
    'props': {
      title: 'Props Example',
      component: PropsExample
    },
    'state': {
      title: 'State Example',
      component: StateExample
    },
    'lists': {
      title: 'Lists Example',
      component: ListsExample
    }
  }

  // Get the current example component
  const CurrentExample = examples[selectedExample].component

  return (
    <div className="app-container">
      <Sidebar
        examples={examples}
        selectedExample={selectedExample}
        onSelectExample={setSelectedExample}
      />
      <div className="content-area">
        <h1>{examples[selectedExample].title}</h1>
        <CurrentExample />
      </div>
    </div>
  )
}

export default App
