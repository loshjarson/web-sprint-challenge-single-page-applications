import React, { useState } from "react";
import styled from "styled-components";

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

    .special {
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

    return(
        <PizzaForm onChange={handleChange}>
            <h2>Build Your Own Pizza</h2>
            <div className="image" />
            <label>
                Name: &nbsp;
            <input type="text" name="name" value={form.name} />
            </label>
            <div className="step">
                <h3>Choice of Size</h3>
                <p>Required</p>
            </div>
            <div className="decision" >
                <select name="sizes" id="size-dropdown" value={form.size} name="size" >
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
                        <input type="radio" name="sauce" value="Original Red"/>
                        &nbsp;Original Red
                    </label>
                    <label>
                        <input type="radio" name="sauce" value="Garlic Ranch"/>
                        &nbsp;Garlic Ranch
                    </label>
                    <label>
                        <input type="radio" name="sauce" value="BBQ Sauce"/>
                        &nbsp;BBQ Sauce
                    </label>
                    <label>
                        <input type="radio" name="sauce" value="Spinach Alfredo"/>
                        &nbsp;Spinach Alfredo
                    </label>
            </div>
            <div className="step">
                <h3>Add Toppings</h3>
                <p>Choose up to 5</p>
            </div>
            <div className="decision" >
                <label>
                    <input type="checkbox" name="pepperoni" checked={form.pepperoni}/>
                    &nbsp;Pepperoni
                </label>
                <label>
                    <input type="checkbox" name="sausage" checked={form.sausage}/>
                    &nbsp;Sausage
                </label>
                <label>
                    <input type="checkbox" name="bacon" checked={form.bacon}/>
                    &nbsp;Bacon
                </label>
                <label>
                    <input type="checkbox" name="grilledChicken" checked={form.grilledChicken}/>
                    &nbsp;Grilled Chicken
                </label>
                <label>
                    <input type="checkbox" name="onion" checked={form.onion}/>
                    &nbsp;Onion
                </label>
                <label>
                    <input type="checkbox" name="greenPepper" checked={form.greenPepper}/>
                    &nbsp;Green Pepper
                </label>
                <label>
                    <input type="checkbox" name="spicyItalianSausage" checked={form.spicyItalianSausage}/>
                    &nbsp;Spicy Italian Sausage
                </label>
            </div>
            <div className="step">
                <h3>Choice of Substitute</h3>
            </div>
            <div className="decision" >
                <label>
                    <input type="checkbox" name="glutenSubstitute" checked={form.glutenSubstitute}/>
                    &nbsp;Gluten Free Crust (FREE)
                </label>
            </div>
            <div className="step">
                <h3>Special Instructions</h3>
            </div>
            <div className="decision" >
                <label>
                    <input className="special" type="text" name="special" value={form.special} placeholder="Anything you else you'd like to add?"/>
                </label>
            </div>
            <div className="bottom-banner" >
                <input type="number" value={form.quantity} name="quantity"/>
                <button><p>Add to Order</p><p>${form.total}</p></button>
            </div>
            

        </PizzaForm>
    )
}

export default Pizza