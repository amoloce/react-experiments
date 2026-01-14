// Props interface - defines what data this component receives
interface SidebarProps {
  examples: Record<string, { title: string; component: React.ComponentType }>
  selectedExample: string
  onSelectExample: (exampleId: string) => void
}

export default function Sidebar({ examples, selectedExample, onSelectExample }: SidebarProps) {
  return (
    <div className="sidebar">
      <h2>React Examples</h2>
      {/* Loop through all examples and create a button for each */}
      {Object.keys(examples).map((exampleId) => (
        <button
          key={exampleId}
          className={`example-button ${selectedExample === exampleId ? 'active' : ''}`}
          onClick={() => onSelectExample(exampleId)}
        >
          {examples[exampleId].title}
        </button>
      ))}
    </div>
  )
}
