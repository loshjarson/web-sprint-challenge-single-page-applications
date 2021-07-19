import React, { useState } from "react";
import styled from "styled-components";

const PizzaForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
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
        max-height: 10rem;
    }

    .decision label {
        margin: 1rem;
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
        special: ""
    })


    const handleChange = event => {
        const {checked, value, name, type} = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        // setFormErrors(name, valueToUse)
        setForm({...form, [name]: valueToUse})
    }

    return(
        <PizzaForm>
            <h2>Build Your Own Pizza</h2>
            <div className="image" />
            <label>
                Name: &nbsp;
            <input type="text" name="name" value={form.name} onChange={handleChange}/>
            </label>
            <div className="step">
                <h3>Choice of Size</h3>
                <p>Required</p>
            </div>
            <div className="decision">
                <select name="sizes" id="size-dropdown" value={form.size} name="size" onChange={handleChange}>
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
            <div className="decision" onChange={handleChange}> 
                    <label>
                        <input type="radio" name="sauce" value="Original Red"/>
                        Original Red
                    </label>
                    <label>
                        <input type="radio" name="sauce" value="Garlic Ranch"/>
                        Garlic Ranch
                    </label>
                    <label>
                        <input type="radio" name="sauce" value="BBQ Sauce"/>
                        BBQ Sauce
                    </label>
                    <label>
                        <input type="radio" name="sauce" value="Spinach Alfredo"/>
                        Spinach Alfredo
                    </label>
            </div>
            <div className="step">
                <h3>Add Toppings</h3>
                <p>Choose up to 5</p>
            </div>
            <div className="decision">
                <label>
                    <input type="checkbox" name="pepperoni" checked={form.pepperoni}/>
                    Pepperoni
                </label>
                <label>
                    <input type="checkbox" name="sausage" checked={form.sausage}/>
                    Sausage
                </label>
                <label>
                    <input type="checkbox" name="bacon" checked={form.bacon}/>
                    Bacon
                </label>
                <label>
                    <input type="checkbox" name="grilledChicken" checked={form.grilledChicken}/>
                    Grilled Chicken
                </label>
                <label>
                    <input type="checkbox" name="onion" checked={form.onion}/>
                    Onion
                </label>
                <label>
                    <input type="checkbox" name="greenPepper" checked={form.greenPepper}/>
                    Green Pepper
                </label>
                <label>
                    <input type="checkbox" name="spicyItalianSausage" checked={form.spicyItalianSausage}/>
                    Spicy Italian Sausage
                </label>
            </div>
            
            

        </PizzaForm>
    )
}

export default Pizza