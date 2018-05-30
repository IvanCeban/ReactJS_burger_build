import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {

  let attahcedClasses = [classes.SideDrawer, classes.Close];

  if(props.open) {
    attahcedClasses = [classes.SideDrawer, classes.Open];
  }


  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed}/>
      <div className={attahcedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;