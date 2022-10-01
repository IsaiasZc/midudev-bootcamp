import './App.css';
import React from 'react'
import Mensaje from './Mensaje';



const Description = () => {
  return <p>Esto es algo nuevo</p>
}

const App = () => {
  
  return (
    <div className='App'>
      <Mensaje color="red" message="Estamos trabajando "/>
      <Mensaje color="green" message="En un curso de React"/>
      <Mensaje color="blue" message=":D"/>
      <Description />
    </div>
  )
}

export default App;
