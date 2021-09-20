import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h2>Product Ordered: {props.cart.length}</h2>
        </div>
    );
};

export default Cart;