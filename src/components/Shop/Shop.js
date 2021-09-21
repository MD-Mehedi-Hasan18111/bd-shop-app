import React, { useEffect, useState } from 'react';
import './Shop.css';
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
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct !== undefined) {
            existingProduct.quantity += 1;
            const othersProduct = cart.filter(item => item.id !== product.id);
            const newCart = [...othersProduct, existingProduct];
            setCart(newCart);
        }
        else {
            product.quantity = 1;
            const newCart = [...cart, product];
            setCart(newCart);
        }
    }

    const confirmOrder = () => {
        if (cart.length > 0) {
            setCart([]);
            alert("Your Order Has Been Successful!");
        }
        else {
            alert("You have no product added!");
        }
    }

    return (
        <div>
            <h1 className="text-center my-5">Our Products!!</h1>
            <div className="container">
                <div className="row">
                    <div className="products col-lg-8">
                        {
                            products.map(product => <Card key={product.id} myFunc={orderProduct} product={product} />)
                        }
                    </div>
                    <div className="col-lg-4">
                        <Cart orderFunc={confirmOrder} cart={cart} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shop;