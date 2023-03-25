import React, { useState } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import './App.css';

function App() {
  const [showPage1, setShowPage1] = useState(true);
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);
  const [showPage4, setShowPage4] = useState(false);
  const [showPage5, setShowPage5] = useState(false);

  const handleClick1 = () => {
    setShowPage1(true);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(false);
    setShowPage5(false);
    document.getElementById("page1link").style.color = "#eeeeee"
    document.getElementById("page2link").style.color = "#333"
    document.getElementById("page3link").style.color = "#333"
    document.getElementById("page4link").style.color = "#333"
    document.getElementById("page5link").style.color = "#333"
  }

  const handleClick2 = () => {
    setShowPage1(false);
    setShowPage2(true);
    setShowPage3(false);
    setShowPage4(false);
    setShowPage5(false);
    document.getElementById("page1link").style.color = "#333"
    document.getElementById("page2link").style.color = "#eeeeee"
    document.getElementById("page3link").style.color = "#333"
    document.getElementById("page4link").style.color = "#333"
    document.getElementById("page5link").style.color = "#333"
  }

  const handleClick3 = () => {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(true);
    setShowPage4(false);
    setShowPage5(false);
    document.getElementById("page1link").style.color = "#333"
    document.getElementById("page2link").style.color = "#333"
    document.getElementById("page3link").style.color = "#eeeeee"
    document.getElementById("page4link").style.color = "#333"
    document.getElementById("page5link").style.color = "#333"
  }

  const handleClick4 = () => {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(true);
    setShowPage5(false);
    document.getElementById("page1link").style.color = "#333"
    document.getElementById("page2link").style.color = "#333"
    document.getElementById("page3link").style.color = "#333"
    document.getElementById("page4link").style.color = "#eeeeee"
    document.getElementById("page5link").style.color = "#333"
  }

  const handleClick5 = () => {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(false);
    setShowPage5(true);
    document.getElementById("page1link").style.color = "#333"
    document.getElementById("page2link").style.color = "#333"
    document.getElementById("page3link").style.color = "#333"
    document.getElementById("page4link").style.color = "#333"
    document.getElementById("page5link").style.color = "#eeeeee"
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
        {showPage4 && <Page4 />}
        {showPage5 && <Page5 />}
        <div class="menu">
          <button onClick={handleClick1} class="links" id="page1link" style={{color: "#eeeeee"}}>P1</button>
          <button onClick={handleClick2} class="links" id="page2link">P2</button>
          <button onClick={handleClick3} class="links" id="page3link">P3</button>
          <button onClick={handleClick4} class="links" id="page4link">P4</button>
          <button onClick={handleClick5} class="links" id="page5link">P5</button>
        </div>
      </body>
    </div>
  );
}

export default App;
