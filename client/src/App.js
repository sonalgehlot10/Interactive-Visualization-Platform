import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Methods from './Methods'; 

function App() {
  return (
    <div>
      <header className="site-header">
        <div className="container-fluid">
          <div className="site-header__inner">
            <table border="0" cellPadding="1" cellSpacing="1" style={{ width: '96%' }}>
              <tbody>
                <tr>
                  <td width="80%">
                    <img alt="Star Services Logo" src="./images/logo.png" style={{ width: '123px', height: '44px' }} />
                  </td>
                  <td align="right" width="20%">
                    {/* <a target="_blank" rel="noopener noreferrer" href="Methods.js" style={{ textDecoration: 'none', color: 'inherit' }}>View Methods</a> */}
                    <Link to="/methods">View Methods</Link>
                    <span id="user-info"></span>
                    <a href="#" id="signin" style={{ display: 'none' }}>Sign In</a>
                    <a href="#" id="logout" style={{ display: 'none' }}>Logout</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </header>

      <main className="site-content">
        <section className="search-helper">
          <div className="container">
            <div className="search-helper__inner">
              <h2 className="h1">Welcome to the<br />Methods Playground</h2>
            </div>
          </div>
        </section>

        <section className="documentation-links">
          <div className="container">
            <div className="documentation-links__inner">
              <div className="row">

                <div className="col">
                  <div className="documentation-links__single">
                    <figure className="documentation-links__icon">
                      <img alt="File Pencil Icon" height="28" src="./images/mindmap.svg" width="28" />
                    </figure>
                    <div className="documentation-links__content">
                      <h2>Mind Maps</h2>
                      <p>A visual diagram that organizes information around a central concept.</p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="documentation-links__single">
                    <figure className="documentation-links__icon">
                      <img alt="File Stack Icon" height="28" src="./images/starburst.svg" width="28" />
                    </figure>
                    <div className="documentation-links__content">
                      <h2>Flowchart</h2>
                      <p>A diagram that represents a process, showing steps as boxes and connecting them with arrows.</p>
                    </div>
                  </div>
                </div>

                {/* Repeat this structure for each section you have, replacing images and text as needed */}
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;