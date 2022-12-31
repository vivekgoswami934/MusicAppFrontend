import { Link } from "react-router-dom";
import "./App.css";
import MainRoutes from "./Pages.jsx/MainRoutes";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h1 className="" style={{ backgroundColor: "black", color: "white" }}>
          MusicApp Project
        </h1>
      </div>

      <MainRoutes />
    </div>
  );
}

export default App;
