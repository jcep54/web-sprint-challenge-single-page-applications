import React from "react";
import { Routes, Route, Link} from 'react-router-dom';
import PizzaForm from "./Components/pizzaForm";
import Home from './Components/Home';
const App = () => {
  return (
    <div>
      <h1>Za Za Pizza</h1>
      
      
      <nav id="order-pizza">
        <Link to='pizza'>Order Now!</Link>

      </nav>

      <div>
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='pizza' element={<PizzaForm />}/>
        </Routes>
      </div>
    </div>
  );
};
export default App;
