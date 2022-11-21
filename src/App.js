import './App.css';
import MapComponent from "./components/MapComponent";
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {
  useEffect(()=> tg.ready(), [])
  const { tg, user, onClose, onToggleButton, requestLocation}=useTelegram()


  return (
    <div className="App">
      {/*{JSON.stringify(tg)}*/}
      <button onClick={requestLocation}>Location</button>
      <button onClick={onToggleButton}>toggle</button>
     <MapComponent />
    </div>
  );
}

export default App;
