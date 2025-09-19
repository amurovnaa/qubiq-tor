import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import css from "../src/App.module.css";
import Homepage from "./pages/Homepage/Homepage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
