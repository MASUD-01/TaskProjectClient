import Home from './Component/Home';
import { Routes, Route } from "react-router-dom";
import RegisterEvigneette from './Component/RegisterEvigneette';
import Header from './Component/Header';
import { useState } from 'react';


function App() {
  const [id, setId] = useState('')
  console.log(id)
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home setId={setId}></Home>}></Route>
        <Route path="/vignettes" element={<RegisterEvigneette id={id}></RegisterEvigneette>} ></Route>
      </Routes>
    </>
  );
}

export default App;
