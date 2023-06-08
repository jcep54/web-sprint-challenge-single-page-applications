import React,{useState, useEffect} from "react";
import { Routes, Route, Link} from 'react-router-dom';
import PizzaForm from "./Components/pizzaForm";
import Home from './Components/Home';
import schema from "./validation/pizzaSchema";
import axios from 'axios';
import * as yup from 'yup';



const initialOrderDetails = {
name: '',
size: '0',
pepperoni: false,
mushrooms: false,
pineapple: false,
anchovies:false,
specialrequest: '',

}
const initialFormErrors = {
   name: '',
}


const App = () => {
  const [order, setOrder] = useState([]);
  const [formErrors, setFromErrors] = useState(initialFormErrors);
  const [orderDetails, setOrderDetails] = useState(initialOrderDetails);

  const handleDetailsChange = (name, value) =>{
    if(name === 'name'){
    validate(name,value)
    }
    setOrderDetails({...orderDetails,[name]:value})
  }
  const orderSubmit = () =>{
    axios.post(`https://reqres.in/api/orders`)
        .then(res => console.log(res))
        .catch(err => console.error(err))
        .finally(setOrderDetails(initialOrderDetails))

  }
  
  const validate = (name, value) => {
    yup.reach(schema,name)
      .validate(value)
      .then(() => setFromErrors({...formErrors, [name]:''}))
      .catch(err => setFromErrors({...formErrors,[name]: err.errors[0]}))
  }


  return (
    <div>

      <h1>Za Za Pizza</h1>

      <nav >
        <Link to='/'>Home</Link>
      </nav>
      
      <div>
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='pizza' element={<PizzaForm 
                                        values={orderDetails} 
                                        onChange={handleDetailsChange} 
                                        submitOrder={orderSubmit}
                                        errors={formErrors}/>}/>
        </Routes>
      </div>

      <nav id="order-pizza">
        <Link to='pizza'>Order Now!</Link>

      </nav>

    </div>
  );
};
export default App;
