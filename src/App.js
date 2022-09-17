import Home from './Component/Home';
import { Routes, Route } from "react-router-dom";
import RegisterEvigneette from './Component/RegisterEvigneette';
import Header from './Component/Header';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/vignettes" element={<RegisterEvigneette></RegisterEvigneette>} ></Route>
      </Routes>
    </>
  );
}

export default App;
