import React from 'react';

const Footer = (props) => {
    return (
        <div style={styles.footerContainer}>
         <div style={styles.priceContainer}>Total Cart Value: {props.totalPrice}</div>
        </div>
    );
}

const styles = {
   footerContainer: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      alignItems: 'center'
   },
   priceContainer: {
      fontSize: 40,
      marginLeft: 10
   }
}

export default Footer;