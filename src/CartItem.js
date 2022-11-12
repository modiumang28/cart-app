import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Phone',
            price: 999,
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () => {   // Arrow function by default binds the value of this to the instance of the class
        console.log('this', this);
    }

    render() { 
        const {title, price, qty} = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/*  Buttons */}
                        <img alt="increase" src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" className='action-icons' onClick={this.increaseQuantity}
                        />
                        <img alt="decrease" src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" className='action-icons'/>
                        <img alt="delete" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" className='action-icons'/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 100,
        width: 100,
        borderRadius: 4,
        background: '#ccc'
    }
};

export default CartItem;