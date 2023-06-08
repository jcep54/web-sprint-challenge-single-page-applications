import React,{useState, useEffect} from "react";
import { Routes, Route, Link} from 'react-router-dom';
import PizzaForm from "./Components/pizzaForm";
import Home from './Components/Home';

const initialOrderDetails = {
name: '',
size: '0',
pepperoni: false,
mushrooms: false,
pineapple: false,
anchovies:false,
specialrequest: '',

}


const App = () => {
  const [order, setOrder] = useState([]);
  const [orderDetails, setOrderDetails] = useState(initialOrderDetails);

  const handleDetailsChange = (name, value) =>{
    setOrderDetails({...orderDetails,[name]:value})
  }
  const orderSubmit = () =>{
    //will send to api 
  }


  return (
    <div>

      <h1>Za Za Pizza</h1>

      <nav>
        <Link to='/'>Home</Link>
      </nav>
      
      <div>
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='pizza' element={<PizzaForm values={orderDetails} onChange={handleDetailsChange} submitOrder={orderSubmit}/>}/>
        </Routes>
      </div>

      <nav id="order-pizza">
        <Link to='pizza'>Order Now!</Link>

      </nav>

    </div>
  );
};
export default App;
