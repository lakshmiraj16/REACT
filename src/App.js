
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import PizzaList from "./components/PizzaList";
import About from "./components/About";
import AddPizza from "./components/AddPizza"; 
import UpdatePizza from "./components/UpdatePizza";

function App() {
  return (
    <BrowserRouter>
      <h1>PIZZA SHOP!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PizzaList" element={<PizzaList />} />
        <Route path="/About" element={<About />} />
        <Route path="/AddPizza" element={<AddPizza />} />
        <Route path="/UpdatePizza/:id" element={<UpdatePizza />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
