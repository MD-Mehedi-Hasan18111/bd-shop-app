import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSignature } from '@fortawesome/free-solid-svg-icons'
import Item from '../Item/Item';

const Cart = (props) => {
    const totalCart = props.cart;
    console.log(props.orderFunc);
    // console.log(totalCart[0]);
    let subTotal = 0;
    let tax = 0;
    let delivery_charge = 0;
    for (let i = 0; i < totalCart.length; i++) {
        subTotal += totalCart[i].price * totalCart[i].quantity;
        // console.log(subTotal);
    }

    if (subTotal > 400) {
        tax = 10;
        delivery_charge = 20
    }
    if (subTotal > 1000) {
        tax = 20;
        delivery_charge = 50;
    }
    if (subTotal > 1500) {
        tax = 30;
        delivery_charge = 100;
    }

    let totalPrice = subTotal + tax + delivery_charge;

    return (
        <div>
            <div className="text-center fixed-right">
                <h2 className="text-center">Cart</h2>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-danger">Ordered Product: <FontAwesomeIcon icon={faShoppingCart} />&nbsp;{props.cart.length}</button>
                <table className="table my-3">
                    <tr>
                        <td>Sub Total: </td>
                        <td>$ {subTotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Tax: </td>
                        <td>$ {tax}</td>
                    </tr>
                    <tr>
                        <td>Delivery Charge: </td>
                        <td>$ {delivery_charge}</td>
                    </tr>
                    <tr>
                        <td>Total: </td>
                        <td>$ {totalPrice.toFixed(2)}</td>
                    </tr>
                </table>
                <button onClick={props.orderFunc} className="btn btn-primary">Purchase</button>
            </div>

            {/* modal  */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ordered Items</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {
                                totalCart.map(item => <Item item={item} />)
                            }
                        </div>
                        <div class="modal-footer">
                            <button onClick={props.orderFunc} type="button" class="btn btn-success" data-bs-dismiss="modal"><FontAwesomeIcon icon={faSignature} />&nbsp;Confirm Order</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;