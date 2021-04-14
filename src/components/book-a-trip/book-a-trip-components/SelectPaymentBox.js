import React, { useState } from 'react';
import "./SelectPaymentBox.css"
import { PayPalButton } from 'react-paypal-button-v2'
import { useDispatch } from 'react-redux';
import { savePaymentMethod } from '../../../actions/tripActions';


const SelectPaymentBox = () => {
    const [payment, setPayment] = useState('')

    const dispatch = useDispatch()


    const SelectPaymentHandler = () => {
        dispatch(savePaymentMethod(payment))
    }

    const successPaymentHandler = () => {

    }


    return (
        <div className="payment-box-wrap ml-3 pb-5">
            <div className="row">
                <h5 className="mb-3">Select Payment Method</h5>
            </div>
            <div className="row">
                <div class="form-check">
                    <input type='radio' id='paypal' name='paymentMethod'
                        value='paypal' onChange={(e) => setPayment(e.target.value)} onClick={SelectPaymentHandler}></input>
                    <label for='paypal' className='ml-1'>Paypal</label>

                    <input type='radio' id='stripe' name='paymentMethod' className='mr-1 ml-4'
                        value='stripe' onChange={(e) => setPayment(e.target.value)} onClick={SelectPaymentHandler}></input>
                    <label for='stripe'  >Stripe</label>
                </div>
            </div>
            <div className="row mt-3 d-flex justify-content-start">
                <div className="payment-details-box d-flex pl-4">
                    {/* <PayPalButton  onSuccess={successPaymentHandler} /> */}
                </div>
            </div>
            {/* <div className="row mt-4">
                <button onClick={SelectPaymentHandler} className="btn btn-success">Save</button>
            </div> */}
        </div>
    )
}

export default SelectPaymentBox;
