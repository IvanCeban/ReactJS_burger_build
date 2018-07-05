import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class orderSummary extends Component {

  // This could be a functional component, doesn't have to be a class
  componentWillUpdate() {
    console.log('[Order] WillUpdate');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(ingrKey => {
        return  <li key={ingrKey}>
          <span style={{textTransform: 'capitalize'}}>{ingrKey}</span>: {this.props.ingredients[ingrKey]}
        </li>
      });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCanceled} btnType="Danger">CANCEL</Button>
        <Button clicked={this.props.purchaseContinue} btnType="Success">CONTINUE</Button>
      </Aux>
    )
  }
}

export default orderSummary;