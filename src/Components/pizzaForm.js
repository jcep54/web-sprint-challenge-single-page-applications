

function PizzaForm () {

    return (
        <div className="pizza_form">
            <form id="pizza-form">

                <label> Name:
                    <input
                        id='name-input'
                        name='name'
                        
                    />
                </label>

                <label>Pizza Size:
                    <select id= 'size-dropdown'>

                        <option value={`small: 12"`}/>
                        <option value={`meduim: 14"`}/>
                        <option value={`large: 16"`}/>

                    </select>
                    
                </label>

                <label> Toppings:
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


                </label>
                <label>Special Instructions
                    <input
                    id="special-instructions"
                    type='text'

                    />
                </label>
                <button id='order-button'>Place Order</button>









            </form>

        </div>
    )
}

export default PizzaForm;