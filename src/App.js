import React from 'react'

import AddToDo from './components/addToDo'
import RenderItems from './components/RenderItems';
import './index.css'
function App() {
  return (
    <div className="App container">
      <AddToDo/>
      <RenderItems/>
    </div>
  );
}

export default App;
