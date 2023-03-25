import React, { useState } from 'react';
import Page1 from './components/Page1';           // import the pages from components
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import './App.css';

function App() {
  const pages = [
    { id: 1, component: <Page1 /> },              // add pages, done!
    { id: 2, component: <Page2 /> },
    { id: 3, component: <Page3 /> },
    { id: 4, component: <Page4 /> },
    { id: 5, component: <Page5 /> },
  ];

  const [activePage, setActivePage] = useState(pages[0].id);

  const handleClick = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="apptitle">Homebread</h1>
      </header>
      <nav>
        {pages.map((page) =>
          page.id === activePage ? (
            <div key={page.id}>{page.component}</div>
          ) : null
        )}
      </nav>
      <div className="menu">
        {pages.map((page) => (
          <button
            onClick={() => handleClick(page.id)}
            className="links"
            style={{
              color: activePage === page.id ? '#eeeeee' : '#333',
            }}
          >
            P{page.id}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;