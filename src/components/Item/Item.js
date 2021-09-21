import React from 'react';

const Item = (props) => {
    const { image, category, title, price, quantity } = props.item;
    return (
        <div className="card">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="detail col-lg-8 col-md-6 col-sm-12">
                    <h5>{title}</h5>
                    <p>Category: {category}</p>
                    <p>Quantity: {quantity}</p>
                    <h5>Price: ${price}</h5>
                </div>
            </div>
        </div>
    );
};

export default Item;