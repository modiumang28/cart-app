import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const { products } = props;
    return (
        <div className='cart'>
            {products.map((product) => {
                return (
                    <CartItem
                        product={product}
                        key={product.id}
                        increaseQuantity={props.increaseQuantity}
                        decreaseQuantity={props.decreaseQuantity}
                        deleteProduct={props.deleteProduct}
                    />
                )
            })}
        </div>
    )

}

export default Cart;