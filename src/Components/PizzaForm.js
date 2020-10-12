import React, { useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'








const PizzaForm = () => {
    //ALL STATES OF DATA
    const[orderForm, setOrderForm]=useState({
        name:'',
        size:{
            small: false,
            medium: false,
            large: false,
            extraLarge: false,
        },
        toppings: {
            pepperoni: false,
            sausage: false,
            mushrooms: false,
            blackOlives: false,
            greenPepper: false,
            onion: false,
        },
        instructions: '',
    })
    const[errors, setErrors] = useState({
        name: '',
    })
    const[buttonOff, setButtonOff] = useState(true)
    const[apiData, setApiData] = useState(null)

    //Validation coding below - using Yup

    // Change Form Data Function
    const formDataChange = (e) => {
        if(e.target.type === 'checkbox'){
            setOrderForm({...orderForm, toppings:{
                ...orderForm.toppings, [e.target.value]: e.target.checked}})
        }else{
            setOrderForm({...orderForm, [e.target.name]:e.target.value})
        }
    }

    // Form Submit Function
    const submitForm = (e) => {
        e.preventDefault();
    }


    return (
    <div>
        <form onSubmit={submitForm}>
        <label htmlFor='name'>
            Your Full Name: 
            <input
                id='name'
                name='name'
                type='text'
                placeholder='Enter Name'
                data-cy='name'
                value=""
                onChange={formDataChange}
            />
        </label>
        <label htmlFor='size'>
            Select Your Size: 
            <select 
                id='size'
                name='size'
                data-cy='size'
                defaultValue='large'
                value=""
                onChange={formDataChange}>
                    <option value='small' data-cy='small'>Small</option>
                    <option value='medium' data-cy='medium'>Medium</option>
                    <option value='large' data-cy='large'>Large</option>
                    <option value='extraLarge' data-cy='extraLarge'>Extra Large</option>
            </select>
        </label>
            <fieldset>
                <legend>Toppings! Pick As Many As You'd Like!</legend>
                <label htmlFor='pepperoni'>
                    <input
                        id='pepperoni'
                        name='pepperoni'
                        value='pepperoni'
                        data-cy='pepperoni'
                        type='checkbox'
                        onChange={formDataChange}
                    />
                    Pepperoni
                </label>
                <label htmlFor='sausage'>
                    <input
                        id='sausage'
                        name='sausage'
                        value='sausage'
                        data-cy='sausage'
                        type='checkbox'
                        onChange={formDataChange}
                    />
                    Sausage
                </label>
                <label htmlFor='mushrooms'>
                    <input
                        id='mushrooms'
                        name='mushrooms'
                        value='mushrooms'
                        data-cy='mushrooms'
                        type='checkbox'
                        onChange={formDataChange}
                    />
                    Mushrooms
                </label>
                <label htmlFor='blackOlives'>
                    <input
                        id='blackOlives'
                        name='blackOlives'
                        value='blackOlives'
                        data-cy='blackOlives'
                        type='checkbox'
                        onChange={formDataChange}
                    />
                    Black Olives
                </label>
                <label htmlFor='greenPepper'>
                    <input
                        id='greenPepper'
                        name='greenPepper'
                        value='greenPepper'
                        data-cy='greenPepper'
                        type='checkbox'
                        onChange={formDataChange}
                    />
                    Green Peppers
                </label>
                <label htmlFor='onion'>
                    <input
                        id='onion'
                        name='onion'
                        value='onion'
                        data-cy='onion'
                        type='checkbox'
                        onChange={formDataChange}
                    />
                    Onions
                </label>
            </fieldset>
            <label htmlFor='instructions'>
                Any Special Instructions?
                <textarea
                    id='instructions'
                    name='instructions'
                    data-cy='instruction'
                    value=""
                    placeholder="Special Instructions Here"
                    onChange={formDataChange}
                />
            </label>      
            <button
                style={{
                    background: "black",
                    color: "white",
                    borderRadius: "8px",
                    width: "150px",
                    height: "30px",
                    fontSize: "1.2rem",
                    border: "none",
                    marginTop: "2%"
                }}
                type="submit"
                data-cy='submit'
                disabled={buttonOff}
            >
            Order Now
            </button>
        </form>   
    </div>
    )
}

export default PizzaForm
