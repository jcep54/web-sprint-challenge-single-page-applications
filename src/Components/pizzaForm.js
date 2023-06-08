

function PizzaForm (props) {

    const {values, onChange, submitOrder } = props

    return (
        <div className="pizza_form">
            <form id="pizza-form">

                <label> Name:
                    <input
                        id='name-input'
                        name='name'
                        
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
                        />
                    </label>
                    <label> Mushrooms
                        <input
                            type='checkbox'
                            name='mushrooms'
                        />
                    </label>
                    <label> Pineapple
                        <input
                            type='checkbox'
                            name='pineapple'
                        />

                    </label>
                    <label> Anchovies 
                        <input
                            type='checkbox'
                            name='anchovies'
                        />

                    </label>


                </div>
                <div>
                    <label>Special Instructions
                        <input
                        id="special-instructions"
                        type='text'

                        />
                    </label>
                </div>
                <button id='order-button'>Place Order</button>

            </form>

        </div>
    )
}

export default PizzaForm;