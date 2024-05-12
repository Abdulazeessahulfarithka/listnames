import { Route, Routes } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Componets/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element=<Home /> />
      </Routes>
    </div>
  );
}

export default App;
