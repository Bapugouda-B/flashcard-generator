import Createflashcard from "./components/Createflashcard";
import Mycards from "./components/Mycards";
import Navbar from "./components/Navbar";
import Viewcard from "./components/Viewcard";
import { HashRouter, Route, Routes } from "react-router-dom";
import {getMyflashCards} from './service/Localstorage.js'
import { useState, useEffect } from "react";

function App() {
  const [data, setData]= useState([])
  
  useEffect(()=>{
    setData(getMyflashCards())
  },[])


  return (
    <>
      <HashRouter >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Createflashcard />} />

          <Route path="/mycards"   element={<Mycards />} />
          <Route path="/view-card/details/:id"  element={<Viewcard data={data}/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
