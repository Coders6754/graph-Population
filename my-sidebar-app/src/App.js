import Sidebar from "./Components/Sidebar";
import { useState } from "react";
import './App.css';
import PopulationGraph from "./Components/PopulationGraph";


function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className={`App ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="graph-container">
        <PopulationGraph/>
      </div>
    </div>
  );
}

export default App;
