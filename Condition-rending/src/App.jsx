import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function Todo({todo}){
//   return (
//     <>
//     <div className="todo">{todo.title}</div>
//     <div className="todo">{todo.desc}</div>
    
//     </>
//   )
// }

function App() {
  const [count, setCount] = useState(0)
  const [btn, setbtn] = useState(true)

  const [todo, settodo] = useState([
    {
      title:"Hello",
      desc:"I Am Good Todo"
    },
    {
      title:"Hello",
      desc:"I Am Bad Todo"
    }
  ])
  
  function Todo({todo}){
    return (
      <>
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
      
      </>
    )
  }


  return (
    <>
      <div>

     
     


        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      { btn && <button>Show Btn</button> }
      <div className="card">
        <button onClick={() => setbtn(!btn)}>
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
