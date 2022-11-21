import './App.css';
import MapComponent from "./components/MapComponent";
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {
  useEffect(()=> tg.ready(), [])
  const { tg, user, onClose, onToggleButton}=useTelegram()


  return (
    <div className="App">
      {JSON.stringify(tg)}
      <button onClick={onToggleButton}>toggle</button>
     <MapComponent />
    </div>
  );
}

export default App;
