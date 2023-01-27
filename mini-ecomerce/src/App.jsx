//import './App.css'
import { Outlet } from "react-router-dom";
import Menu from './composants/Menu'
import DataContextProvider from "./context/dataContext";
import ProfilContextProvider from "./context/profilContext";

function App() {

  return (
    <div className="App">
      <Menu />
      <DataContextProvider>
        <ProfilContextProvider>
        <div className="container">
          <Outlet />
        </div>
        </ProfilContextProvider>
      </DataContextProvider>
    </div>
  )
}

export default App
