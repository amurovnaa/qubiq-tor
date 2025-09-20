import { useState } from "react";
import Homepage from "./pages/Homepage/Homepage.jsx";
import "keen-slider/keen-slider.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
