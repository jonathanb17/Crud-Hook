
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import CrudHook from './components/CrudHook';


function App() {

  return (
    <div>
      <h1>CRUD App with Hooks</h1>
      <div className="container">
        <CrudHook />
      </div>
    </div>
  );
}

export default App;
