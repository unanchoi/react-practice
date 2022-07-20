import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Love from "./pages/Love";
import Detail from "./pages/Detail";
import styled from "styled-components";

const AppDom = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin: 300px 0 0 0;
`

function App() {
  return (
    <>
    <AppDom>
    <NavBar>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/about" element={<About />}> 
        <Route path="/detail1" element={<div>상세 페이지1 </div>} />
        <Route path="/detail2" element={<div>상세 페이지2</div>} />
        <Route path="/:nickname" element={<Detail />} />
      </Route>
      <Route path="/love" element={<Love />}> </Route>
    </Routes>
    </NavBar>
    </AppDom>
    </>
  )
}


export default App;
