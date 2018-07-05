import React from 'react';
import classes from './Order.css';

const order = (props) => {

  const ingredients = [];

  for(let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }


  const ingredientOutput = ingredients.map(ingr => {
    return <span
      style={{textTransform: 'capitalize',
              display: 'inline-block',
              margin: '0 8px',
              border: '1px solid #eee',
              padding: '5px'}}
      key={ingr.name}>{ingr.name} ({ingr.amount})</span>
  });

  return (
      <div className={classes.Oreder}>
        <p>Ingredients: {ingredientOutput}</p>
        <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
      </div>
    )
};

export default order;