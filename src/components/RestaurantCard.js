import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 20rem;

    img{
        width: 20rem;
        height: 10rem;
        backgroundSize: contain;
    }

    div {
        display: flex;
        justify-content: space-between;
        width: 5rem;
    }
`

const RestaurantCard = props => {
    const { restaurant } = props;
    let price = "";

    for(let i=0; i<restaurant.cost; i++){
        price = price + "$";
    }
    
    return (
        <Card>
            <img src={restaurant.photo} alt={`Food from ${restaurant.name}`}/>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.cuisine}</p>
            <div>
                <p>{price}</p>
                <p>{restaurant.stars}★</p>
            </div>
            
            <p>{restaurant.deliveryTime}</p>
        </Card>
    )
}

export default RestaurantCard