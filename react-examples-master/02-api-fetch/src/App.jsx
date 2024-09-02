import { useState } from "react";
import "./App.css";
import Weather from "./components/Saints.jsx";
import Select from "./components/Select.jsx";

function App() {
  const [selectedCity, setSelectedCity] = useState("hoy");

  return (
    <>
      <h1>Santo</h1>
      <div className="card">
        <Select value={selectedCity} setValue={setSelectedCity} />
        <Weather code={selectedCity} />
      </div>
    </>
  );
}

export default App;
