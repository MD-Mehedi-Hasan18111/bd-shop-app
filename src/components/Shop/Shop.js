import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const orderProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div>
            <h1 className="text-center my-5">This is our Shop</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h1>Products</h1>
                        {
                            products.map(product => <Card myFunc={orderProduct} product={product} />)
                        }
                    </div>
                    <div className="col-lg-4">
                        <h1>Cart</h1>
                        <Cart cart={cart} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shop;