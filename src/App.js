import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  //add a loader
  //const [loader, setLoader] = useState("false");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${input}`);
      setResult(res.data.result.full_short_link);
    } catch (err) {
      alert(err);
    }
  };

  const handleClick = () => {
    fetchData();
    setInput("");
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter your link here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
