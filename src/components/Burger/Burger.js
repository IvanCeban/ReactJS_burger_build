import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients) // transforms Object into array
    .map(ingrKey => {                                           // loops through the array
      return [...Array(props.ingredients[ingrKey])].map((current, index) => {
        return <BurgerIngredient key={ingrKey + index} type={ingrKey}/>
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  );
};

export default burger;