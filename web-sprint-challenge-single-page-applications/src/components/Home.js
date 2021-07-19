import React from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import styled from "styled-components";

const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    width: 70%;

`

const Promo = styled.div`
    width: 100%;
    background: url("https://www.ahpizz.com/wp-content/themes/ahpizz/library/images/splash/splash_pizza.jpg");
    height: 35rem;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-content: center;

    h2 {
        margin: auto auto 2rem;
        font-weight: bolder;
        font-size: 4rem;
        text-shadow: -3px 3px 1px gold;
        
    }
    
    a {
        margin: 3rem auto auto;
        box-shadow:inset 2px -1px 0px 0px #ffffff;
        background-color:transparent;
        border-radius:8px;
        border:1px solid #dcdcdc;
        display:inline-block;
        cursor:pointer;
        color:#666666;
        font-family:Arial;
        font-size:22px;
        font-weight:bold;
        padding:7px 29px;
        text-decoration:none;
    }

    a:hover {
        background-color: white;
        box-shadow:inset 2px -1px 0px 0px grey;
    }
`

const Home = props => {
    const { restaurants } = props;
    return(
        <div>
            <Promo>
                <h2>The best coding food, delivered by drone for free</h2>
                <Link to="/pizza" id="order-pizza" data-cy="order-pizza">
                    <div>Pizza?</div>
                </Link>
            </Promo>
            <p>Food delivery in Heaven</p>
            <Gallery>    
                {restaurants.map(restaurant => {
                    return(<RestaurantCard restaurant={restaurant} key={restaurant.id}/>)
                })}
            </Gallery>
        </div>
    )
}

export default Home