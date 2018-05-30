import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orederSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingrKey => {
      return  <li key={ingrKey}>
                <span style={{textTransform: 'capitalize'}}>{ingrKey}</span>: {props.ingredients[ingrKey]}
              </li>
    });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCanceled} btnType="Danger">CANCEL</Button>
      <Button clicked={props.purchaseContinue} btnType="Success">CONTINUE</Button>
    </Aux>
  )
};

export default orederSummary;