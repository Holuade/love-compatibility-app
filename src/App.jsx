import { useState } from "react";
import CountUp from "react-countup";
import messages from "./data/Message";
import "./App.css";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [compatibility, setCompatibility] = useState(null);
  const [message, setMessage] = useState("");

  const calculateCompatibility = (name1, name2) => {
    let combinedNames = (name1 + name2).toLowerCase();
    let score = 0;

    for (let char of combinedNames) {
      score += char.charCodeAt(0);
    }

    let percentage = score % 101;
    return percentage;
  };  

  const handleCheck = () => {
    if (!name1 || !name2) {
      setMessage("Enter both names to check compatibility! ❌");
      setCompatibility(null);
      return;
    }

    const percentage = calculateCompatibility(name1, name2);
    setCompatibility(percentage);

    // ✅ Find the correct message from messages.js
    const foundMessage = messages.find(
      (m) => percentage >= m.min && percentage <= m.max
    );

    setMessage(foundMessage ? foundMessage.text : "Love is a mystery! 💫");
  };

  return (
    <div className="app-container">
      <h1>💜 Love Compatibility Checker</h1>
      <input 
        type="text" 
        placeholder="Your Name" 
        value={name1} 
        onChange={(e) => setName1(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Partner's Name" 
        value={name2} 
        onChange={(e) => setName2(e.target.value)} 
      />
      <button onClick={handleCheck}>Check Compatibility</button>

      {message && (  // ✅ Ensure message always displays
        <div className="result">
          {compatibility !== null && (
            <h2>💞 Compatibility Score: <CountUp start={0} end={compatibility} duration={2} />%</h2>
          )}
          <p>{message}</p>
        </div>
      )}

    </div>
  );
}

export default App;
