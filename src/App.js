import './App.css';
import MapComponent from "./components/MapComponent";
import {useEffect} from "react";

const tg = window.Telegram.WebApp

function App() {
  useEffect(()=>{
    tg.ready()
  },[])

  const onClose=()=> {
    tg.close()
  }
  return (
    <div className="App">
     <MapComponent />
    </div>
  );
}

export default App;
