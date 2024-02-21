import { MapViewer } from "./components/MapViewer";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="flex w-full h-screen relative">
      <Sidebar />
      <div className="flex-grow">
        <MapViewer />
      </div>
    </div>
  );
}

export default App;
