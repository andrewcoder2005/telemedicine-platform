import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from "react";
import { response } from 'express';
function App() {
  const {backendData, setBackendData} = useState([{}]);
  useEffect(()=>{
    fetch("/api".then(
      response => response.json()
    ).then(
      data=>{
        setBackendData(data)
      }
    )
  )
  },[])
  return (
    <div>

    </div>
  );
}

export default App;
