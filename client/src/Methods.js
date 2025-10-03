import React from 'react';
import './Methods.css'; // Create a CSS file for styling this component

function Methods() {
  return (
    <div className="methods-container">
      <div className="navbar">
        <a href="/">Home</a>
        <button id="login" style={{ marginLeft: 'auto', display: 'inline-block' }}>Login</button>
        <button id="logout" style={{ display: 'none' }}>Logout</button>
        <span id="user-info" className="email"></span>
      </div>

      <div className="main">
        <div className="sidebar">
          <h3 className="title">Select a Method</h3>
          <hr style={{ width: '96%', marginLeft: '2%', marginRight: '2%' }} />
          <a href="map.html" id="method1">1. MindMap
            <span className="tooltip-text">A visual diagram that organizes information around a central concept.</span>
          </a>
          {/* Repeat this block for other methods, adjusting the href and text */}
        </div>

        <div className="content">
          <iframe name="content-frame" src="map.html" title="method-content"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Methods;