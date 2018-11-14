
import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';


const App = (props) => {
  return (
    <BrowserRouter>
      <Routes user={props.user}/>
    </BrowserRouter>
  )
}

export default App
