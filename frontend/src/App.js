import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
   const [Check, setstate] = useState([])
   useEffect(() => {
      fetch("http://localhost:3001/api/user", { method: 'get', })
         .then((result) => result.json())
         .then((res) => setstate(res))
         .catch((err) => console.log(err))
   }, [])
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
        </p>

            <ul>
               {
                  Check.map(item => (
                     <>
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                        <li>{item.password}</li>
                        <br />
                        <br />
                     </>
                  ))
               }
            </ul>

         </header>
      </div>
   );
}

export default App;
