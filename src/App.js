import Home from './Component/Home';
import { Routes, Route } from "react-router-dom";
import RegisterEvigneette from './Component/RegisterEvigneette';
import Header from './Component/Header';
import { useEffect, useState } from 'react';


function App() {
  const [id, setId] = useState('')
  const [data, setData] = useState([])
  const [loading, isloading] = useState(false)
  useEffect(() => {
    isloading(true)
    fetch(`https://taskprojects.onrender.com/task/${id}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        isloading(false)

      })
  }, [id])
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home setId={setId}></Home>}></Route>
        <Route path="/vignettes" element={<RegisterEvigneette id={id} data={data} loading={loading}></RegisterEvigneette>} ></Route>
      </Routes>
    </>
  );
}

export default App;
