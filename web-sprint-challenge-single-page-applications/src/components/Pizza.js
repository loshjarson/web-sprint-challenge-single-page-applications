import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const PizzaForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 60rem;
    margin: auto;
    text-align: center;

    .image {
        background: url("https://www.ahpizz.com/wp-content/themes/ahpizz/library/images/splash/splash_pizza.jpg");
        width: 100%;
        height: 20rem;
        background-size: cover;
        
    }

    .step {
        width: 100%;
        text-align: left;
        background-color: rgba(211,211,211,.5);
    }
    .step p , .step h3{
        margin: 1rem;
    }

    .decision {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        padding: 1rem 1rem;
        text-align: left;
        max-height: 15rem;
        
    }

    label {
        margin: 1rem ;
    }

    select {
        text-align: center;
        width: 15rem;
        font-size: 1.5rem;
    }

    #special-text {
        width: 98%;
        height: 2rem;
        font-size: 1.5rem;
    }

    .bottom-banner{
        background-color: rgba(211,211,211,.5);
        width: 100%;
        display: flex;
        justify-content: space-around;
        
    }

    .bottom-banner input{
        width: 3rem;
        height: 2.5rem;
        margin: auto;
    }

    .bottom-banner button{
        width: 80%;
        height: 3rem;
        margin: auto;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem 3.5rem;
        font-size: 1.2rem;
    }
`

const Pizza = props => {
    const [form, setForm] = useState({
        name: "",
        size: "",
        sauce: "",
        pepperoni: false,
        sausage: false,
        bacon: false,
        grilledChicken: false,
        onion: false,
        spicyItalianSausage: false,
        greenPepper: false,
        glutenSubstitute: false,
        special: "",
        quantity: 1,
        total: 18,
    })


    const handleChange = event => {
        const {checked, value, name, type} = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        // setFormErrors(name, valueToUse)
        setForm({...form, [name]: valueToUse})
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios
            .post('http://localhost:5000/api/pizza', form)
            .then(res => {
                console.log(res)
                setForm({
                    name: "",
                    size: "",
                    sauce: "",
                    pepperoni: false,
                    sausage: false,
                    bacon: false,
                    grilledChicken: false,
                    onion: false,
                    spicyItalianSausage: false,
                    greenPepper: false,
                    glutenSubstitute: false,
                    special: "",
                    quantity: 1,
                    total: 18,
                  })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <PizzaForm onSubmit={handleSubmit} id="pizza-form">
            <h2>Build Your Own Pizza</h2>
            <div className="image" />
            <label>
                Name: &nbsp;
            <input id="name-input" type="text" name="name" value={form.name}  onChange={handleChange} data-cy='name' required/>
            </label>
            <div className="step">
                <h3>Choice of Size</h3>
                <p>Required</p>
            </div>
            <div className="decision" >
                <select name="sizes" id="size-dropdown" value={form.size} name="size"  onChange={handleChange} required>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">X-Large</option>
                </select>
            </div>
            <div className="step">
                <h3>Choice of Size</h3>
                <p>Required</p>
            </div>
            <div className="decision" > 
                    <label>
                        <input type="radio" name="sauce" data-cy="sauce" value="Original Red" onChange={handleChange} required />
                        &nbsp;Original Red
                    </label>
                    <label>
                        <input type="radio" name="sauce" value="Garlic Ranch" onChange={handleChange}/>
                        &nbsp;Garlic Ranch
                    </label>
                    <label>
                        <input type="radio" name="sauce" value="BBQ Sauce" onChange={handleChange}/>
                        &nbsp;BBQ Sauce
                    </label>
                    <label>
                        <input type="radio" name="sauce" value="Spinach Alfredo" onChange={handleChange}/>
                        &nbsp;Spinach Alfredo
                    </label>
            </div>
            <div className="step">
                <h3>Add Toppings</h3>
                <p>Choose up to 5</p>
            </div>
            <div className="decision" >
                <label>
                    <input type="checkbox" data-cy="topping1" name="pepperoni" checked={form.pepperoni} onChange={handleChange}/>
                    &nbsp;Pepperoni
                </label>
                <label>
                    <input type="checkbox" data-cy="topping2" name="sausage" checked={form.sausage} onChange={handleChange}/>
                    &nbsp;Sausage
                </label>
                <label>
                    <input type="checkbox" data-cy="topping3" name="bacon" checked={form.bacon} onChange={handleChange}/>
                    &nbsp;Bacon
                </label>
                <label>
                    <input type="checkbox" data-cy="topping4" name="grilledChicken" checked={form.grilledChicken} onChange={handleChange}/>
                    &nbsp;Grilled Chicken
                </label>
                <label>
                    <input type="checkbox" data-cy="topping5" name="onion" checked={form.onion} onChange={handleChange}/>
                    &nbsp;Onion
                </label>
                <label>
                    <input type="checkbox" data-cy="topping6" name="greenPepper" checked={form.greenPepper} onChange={handleChange}/>
                    &nbsp;Green Pepper
                </label>
                <label>
                    <input type="checkbox" data-cy="topping7" name="spicyItalianSausage" checked={form.spicyItalianSausage} onChange={handleChange}/>
                    &nbsp;Spicy Italian Sausage
                </label>
            </div>
            <div className="step">
                <h3>Choice of Substitute</h3>
            </div>
            <div className="decision" >
                <label>
                    <input type="checkbox" name="glutenSubstitute" checked={form.glutenSubstitute} onChange={handleChange}/>
                    &nbsp;Gluten Free Crust (FREE)
                </label>
            </div>
            <div className="step">
                <h3>Special Instructions</h3>
            </div>
            <div className="decision" >
                <label>
                    <input id="special-text" type="text" name="special" value={form.special} placeholder="Anything you else you'd like to add?" onChange={handleChange}/>
                </label>
            </div>
            <div className="bottom-banner" >
                <input type="number" value={form.quantity} name="quantity" onChange={handleChange}/>
                <button data-cy="submit" id="order-button"><p>Add to Order</p><p>${form.total}</p></button>
            </div>
            

        </PizzaForm>
    )
}

export default Pizza