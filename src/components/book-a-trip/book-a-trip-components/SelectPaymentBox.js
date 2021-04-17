import React, { useEffect, useState } from 'react';
import axios from "axios"
import "./SelectPaymentBox.css"
import { PayPalButton } from 'react-paypal-button-v2'
import { useDispatch, useSelector } from 'react-redux';
import { getBookedTrip, payOrder, savePaymentMethod } from '../../../actions/tripActions';
import { ORDER_PAY_RESET } from '../../../constants/tripConstants';


const SelectPaymentBox = ({ bookingId }) => {

    const [sdkReady, setSdkReady] = useState(false)

    const dispatch = useDispatch()

    const bookedTrip = useSelector(state => state.bookedTrip)
    const { bookedTrip: booking } = bookedTrip

    const paymentMethod = useSelector(state => state.paymentMethod.paymentMethod)

    const orderPay = useSelector((state) => state.orderPay)
    const { success, loading } = orderPay


    const setPaymentToPaypal = () => {
        dispatch(savePaymentMethod('paypal'))
    }
    const setPaymentToStripe = () => {
        dispatch(savePaymentMethod('stripe'))
    }

    useEffect(() => {
        const addPayPalScript = async () => {
            const { data: clientId } = await axios.get('/api/config/paypal')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async = true
            script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)
        }


        if (!booking || success) {
            dispatch({ type: ORDER_PAY_RESET })
            dispatch(getBookedTrip(bookingId))
        } else if (!booking.isPaid) {
            if (!window.paypal) {
                addPayPalScript()
            } else {
                setSdkReady(true)
            }
        }
    }, [dispatch, bookingId, success, booking])

    const successPaymentHandler = (paymentResult) => {
        console.log(paymentResult)
        dispatch(payOrder(bookingId, paymentResult, { paymentMethod: paymentMethod }))

    }


    return (
        <div className="payment-box-wrap ml-3 pb-5">
            <div className="row">
                <h5 className="mb-3">Payment procedure</h5>
            </div>
            {!booking.isPaid ? (
                <div className="row">
                    <div className="col-lg-4">
                        <button className='paypal-btn' onClick={setPaymentToPaypal} style={{ backgroundImage: `url("https://p.kindpng.com/picc/s/12-123352_dawn-ellmore-employment-paypal-logo-png-transparent-png.png")`, backgroundSize: 'cover', backgroundPosition: 'center', }}></button>
                    </div>
                    <div className="col-lg-4">
                        <button className='stripe-btn' onClick={setPaymentToStripe} style={{ backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png")`, backgroundSize: 'cover', backgroundPosition: 'center', }}></button>
                    </div>
                </div>
            ) : null}
            <div className="row mt-3 d-flex justify-content-start">
                <div className="payment-details-box d-flex pl-4">
                    {paymentMethod === 'paypal' && !booking.isPaid ? (
                        <div className="justify-content-center d-flex mt-4 ml-5">
                            <PayPalButton amount={booking.totalPrice} onSuccess={successPaymentHandler} />
                        </div>
                    ) :
                        paymentMethod === 'stripe' && !booking.isPaid ? (
                            <p>Stripe Buttons</p>
                        ) : !booking.isPaid ? (
                            <h6 className="mt-3">Please select a payment method to proceed payment</h6>
                        ) : (
                            <h5 className="mt-3" style={{ color: 'green' }}>Your payment is complete</h5>
                        )}
                </div>
            </div>
        </div>
    )
}

export default SelectPaymentBox;
