import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      {/* <h1>LinkedIn App</h1> */}
      {/* header */}
      <Header/>
      {/* appbody */}
<div className='app__body'>
<Sidebar/>
</div> 
      {/* sidebar */}
      {/* feed */}
      {/* widgetsc  */}

    </div>
  );
}

export default App;
