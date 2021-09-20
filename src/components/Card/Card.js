import React from 'react';
import './Card.css'

const Card = (props) => {
    // console.log(props);
    const { image, title, price, category } = props.product;
    return (
        <div className="card">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={image} alt="" />
                </div>
                <div className="detail col-lg-6 col-md-6 col-sm-12">
                    <h2>{title}</h2>
                    <p>Category: {category}</p>
                    <h1>Price: ${price}</h1>
                    <button onClick={() => props.myFunc(props.product)} className="btn btn-primary btn-md">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;