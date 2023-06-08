import React,{useState, useEffect} from "react";
import { Routes, Route, Link} from 'react-router-dom';
import PizzaForm from "./Components/pizzaForm";
import Home from './Components/Home';




const App = () => {
  const [order, setOrder] = useState()

  return (
    <div>

      <h1>Za Za Pizza</h1>

      <nav>
        <Link to='/'>Home</Link>
      </nav>
      
      <div>
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='pizza' element={<PizzaForm />}/>
        </Routes>
      </div>

      <nav id="order-pizza">
        <Link to='pizza'>Order Now!</Link>

      </nav>

    </div>
  );
};
export default App;
