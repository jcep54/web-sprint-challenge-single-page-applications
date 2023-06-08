

function PizzaForm (props) {

    const {values, onChange, submitOrder, errors} = props;


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
        

        <form id="pizza-form" onSubmit={placeOrder}>
                <h2>Whatcha want???</h2>
                <div className="error">
                    <div>{errors.name}</div>
                </div>
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
                        <select id= 'size-dropdown' value={values.size} name='size' onChange={inputChange}>
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
                        id="special-text"
                        name='specialrequest'
                        type='text'
                        value={values.specialrequest}
                        onChange={inputChange}
                        />
                    </label>
                </div>
                <button id='order-button'>Place Order</button>

        </form>

       
    )
}

export default PizzaForm;