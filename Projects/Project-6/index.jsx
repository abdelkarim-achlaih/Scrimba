import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
    <Menu>
      <Menu.Button>Sports</Menu.Button>
      <Menu.Dropdown>
        {sports.map(sport => (
          <Menu.Item key={sport}>{sport}</Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
