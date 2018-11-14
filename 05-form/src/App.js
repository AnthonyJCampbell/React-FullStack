import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './router'
import './styles.css'
import './firebase'
const App = (props) => {

  return (
    <BrowserRouter>
      <Routes {...props}/>
    </BrowserRouter>
  )
}

export default App