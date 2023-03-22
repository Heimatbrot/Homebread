import React, { useState } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import './App.css';

function App() {
  const [showPage1, setShowPage1] = useState(true);
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);

  const handleClick1 = () => {
    setShowPage1(true);
    setShowPage2(false);
    setShowPage3(false);
    document.getElementById("page1link").style.color = "#eeeeee"
    document.getElementById("page2link").style.color = "#333"
    document.getElementById("page3link").style.color = "#333"
  }

  const handleClick2 = () => {
    setShowPage1(false);
    setShowPage2(true);
    setShowPage3(false);
    document.getElementById("page1link").style.color = "#333"
    document.getElementById("page2link").style.color = "#eeeeee"
    document.getElementById("page3link").style.color = "#333"
  }

  const handleClick3 = () => {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(true);
    document.getElementById("page1link").style.color = "#333"
    document.getElementById("page2link").style.color = "#333"
    document.getElementById("page3link").style.color = "#eeeeee"
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="apptitle">Homebread</h1>
      </header>
      <body>
        {showPage1 && <Page1 />}
        {showPage2 && <Page2 />}
        {showPage3 && <Page3 />}
        <div class="menu">
          <button onClick={handleClick1} class="links" id="page1link" style={{color: "#eeeeee"}}>Page 1</button>
          <button onClick={handleClick2} class="links" id="page2link">Page 2</button>
          <button onClick={handleClick3} class="links" id="page3link">Page 3</button>
        </div>
      </body>
    </div>
  );
}

export default App;
