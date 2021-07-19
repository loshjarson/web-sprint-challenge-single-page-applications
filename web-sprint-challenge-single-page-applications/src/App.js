import React, { useEffect, useState } from "react";
import { NavLink, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Pizza from "./components/Pizza";
import styled from "styled-components";

const HeaderBar = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: #FF6767;
  
  h1 {
    margin: 1rem;
  }

  nav a{
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 1rem;
  }
`


const App = () => {
  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/restaurants')
        .then(response => {
          setRestaurants(response.data)
          console.log(response)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  return (
    <Router>
      <HeaderBar>
        <h1>Lambda Eats</h1>
        <nav>
          <NavLink exact to="/" activeStyle={{
            fontWeight: "bold",
            backgroundColor: "black",
            color: "white",
          }} key="home">
            Home
          </NavLink>
          <NavLink to="/contact" activeStyle={{
            fontWeight: "bold",
            backgroundColor: "black",
            color: "white",
          }} key="contact">
            Help
          </NavLink>
        </nav>
      </HeaderBar>
      <Switch>
        <Route exact path="/">
          <Home restaurants={restaurants}/>
        </Route>
        <Route path="/pizza">
          <Pizza />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
