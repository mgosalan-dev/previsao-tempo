// App.js
import { useRef, useState } from "react";
import axios from "axios";
import WI from "./components/information/WI";

import "./App.css";

function App() {
  const [weather, setWeather] = useState();
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "1241039ec49bf5fea4cc4af5daabc91d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    try {
      const apiInfo = await axios.get(url);
      setWeather(apiInfo.data);
    } catch {
      alert("Cidade não encontrada");
    }
  }

  return (
    <div className="app-container">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <br />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WI weather={weather} />}
    </div>
  );
}

export default App;
