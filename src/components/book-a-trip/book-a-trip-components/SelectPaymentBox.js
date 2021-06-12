import React, { useEffect, useState } from 'react';
import axios from "axios"
import "./SelectPaymentBox.css"
import { PayPalButton } from 'react-paypal-button-v2'
import { useDispatch, useSelector } from 'react-redux';
import { getBookedTrip, payOrder, savePaymentMethod } from '../../../actions/bookingActions';
import { ORDER_PAY_RESET } from '../../../constants/bookingConstants';


const SelectPaymentBox = ({ bookingId }) => {

    const [setSdkReady] = useState(false)

    const dispatch = useDispatch()

    const bookedTrip = useSelector(state => state.bookedTrip)
    const { bookedTrip: booking } = bookedTrip

    const paymentMethod = useSelector(state => state.paymentMethod.paymentMethod)

    const orderPay = useSelector((state) => state.orderPay)
    const { success} = orderPay


    const setPaymentToEasyPaisa = () => {
        dispatch(savePaymentMethod('easypaisa'))
    }
    const setPaymentToCod = () => {
        dispatch(savePaymentMethod('cod'))
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
                        <button className='easypaisa-btn' onClick={setPaymentToEasyPaisa} style={{ backgroundImage: `url("https://propakistani.pk/how-to/wp-content/uploads/2020/09/Easypaisa-logo.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center', }}></button>
                    </div>
                    <div className="col-lg-4">
                        <button className='cod-btn' onClick={setPaymentToCod} style={{ backgroundImage: `url("https://pngimage.net/wp-content/uploads/2018/05/cash-on-delivery-icon-png-6.png")`, backgroundSize: 'cover', backgroundPosition: 'center', }}></button>
                    </div>
                </div>
            ) : null}
            <div className="row mt-3 d-flex justify-content-start">
                <div className="payment-details-box d-flex justify-content-center">
                    {paymentMethod === 'easypaisa' && !booking.isPaid ? (
                        <div className="justify-content-center d-flex mt-4">
                            <PayPalButton amount={booking.totalPrice} onSuccess={successPaymentHandler} />
                        </div>
                    ) :
                        paymentMethod === 'cod' && !booking.isPaid ? (
                            <div className='m-3'>
                                <p>For cash on delivery payment, our staff will contact you for further details.</p>
                                <p>You will need to deposit cash to our member at least 2 days before of departure</p>
                            </div>
                        ) : !booking.isPaid ? (
                            <h6 className="mt-3 ml-3">Please select a payment method to proceed payment</h6>
                        ) : (
                            <h5 className="mt-3" style={{ color: 'green' }}>Your payment is complete</h5>
                        )}
                </div>
            </div>
        </div>
    )
}

export default SelectPaymentBox;
