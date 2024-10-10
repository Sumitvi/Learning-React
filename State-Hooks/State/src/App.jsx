import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)
  const [color , setColor] = useState(0);


  useEffect(() => {
    alert("run on every render")
  
   
  },);


  useEffect(() => {
    alert("run only once")
  
   
  }, []);
  
  useEffect(() => {
    alert("run bcz count is changed")
    setColor(color+1);
  
   
  }, [count]);
  

useEffect(()=>{
  alert("run bcz color is changes");
},[color])

  return (
    <>

    <NavBar color={"navy" + "blue" + color}/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
