

function PizzaForm (props) {

    const {values, onChange, submitOrder } = props;


    const inputChange = e => {
        const {name, value, type, checked} = e.target;
        const useThis = type === 'checkbox' ? checked: value;
        onChange(name,useThis); 
     }
    const placeOrder = e =>{
        e.preventDefault();
        submitOrder()
    }
    return (
        <div className="pizza_form">
            <form id="pizza-form" onSubmit={placeOrder}>

                <label> Name:
                    <input
                        id='name-input'
                        name='name'
                        value={values.name}
                        onChange={inputChange}
                    />
                </label>
                <div>
                    <label>Pizza Size:
                        <select id= 'size-dropdown'>
                            <option vlue='0'>---Select Size---</option>
                            <option value='1'>small:12"</option>
                            <option value= '2'>meduim: 14"</option>
                            <option value='3'>large: 16"</option>

                        </select>
                        
                    </label>
                </div>

                <div className='topping-options'> 
                    <h4>Toppings:</h4>
                    <label> Pepperoni
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            value={values.pepperoni}
                            checked={values.pepperoni}
                            onChange={inputChange}
                        />
                    </label>
                    <label> Mushrooms
                        <input
                            type='checkbox'
                            name='mushrooms'
                            value={values.mushrooms}
                            checked={values.mushrooms}
                            onChange={inputChange}
                        />
                    </label>
                    <label> Pineapple
                        <input
                            type='checkbox'
                            name='pineapple'
                            value={values.pineapple}
                            checked={values.pineapple}
                            onChange={inputChange}
                        />

                    </label>
                    <label> Anchovies 
                        <input
                            type='checkbox'
                            name='anchovies'
                            value={values.anchovies}
                            checked={values.anchovies}
                            onChange={inputChange}
                        />

                    </label>


                </div>
                <div>
                    <label>Special Instructions
                        <input
                        id="special-instructions"
                        name='specialrequest'
                        type='text'
                        value={values.specialrequest}
                        onChange={inputChange}
                        />
                    </label>
                </div>
                <button id='order-button'>Place Order</button>

            </form>

        </div>
    )
}

export default PizzaForm;