import React from "react";
import { Routes, Route, Link} from 'react-router-dom';
const App = () => {
  return (
    <>
      <h1>Za Za Pizza</h1>
      <p>It aint easy being cheesy 🧀</p>
      
      <nav id="order-pizza">
        <Link to='pizza'>Order Now!</Link>

      </nav>

      <div>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='pizza' element={<PizzaForm />}/>
        </Routes>
      </div>
    </>
  );
};
export default App;
