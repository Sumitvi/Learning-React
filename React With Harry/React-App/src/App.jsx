// import './App.css'
import {useState} from "react"
import NavBar from "./Component/NavBar.jsx"
import Footer from "./Component/Footer.jsx"
import Card from "./Component/Card.jsx"

function App() {
  
  return (
    <>
      <NavBar/>

      <Card title = "This Is First Card" description="I am not Too much expencive"/>
      <Card title = "This Is Second Card" description="I am not Too much expencive"/>
      <Card title = "This Is Third Card" description="I am not Too much expencive"/>

      <Footer/>
    

    </>
  )
}

export default App
