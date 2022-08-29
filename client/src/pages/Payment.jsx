import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PaymentForm from '../components/PaymentForm'
import ShoppingCartItem from '../components/ShoppingCartList'
import { Button, FormWrapper } from '../components/styledComponents/form'
import { CheckoutList } from '../components/styledComponents/payment'
import { removeFromCart } from '../redux/reducers/shoppingCartReducer'

const Payment = () => {
    const shoppingCartItems = useSelector((state) => state.shoppingCart.items)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Pay Here :)</h1>
            <FormWrapper>
                <PaymentForm/>
            </FormWrapper>
            <CheckoutList>
                {shoppingCartItems.map((item, index) => {
                    return (
                        <ShoppingCartItem key={item.id}>
                            <ShoppingCartItem.Image src={item.Image}/>
                            <div style={{flexGrow: '2', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                                <ShoppingCartItem.Title>{item.name}</ShoppingCartItem.Title>
                                <ShoppingCartItem.Price>{item.price}</ShoppingCartItem.Price> 
                                <Button style={{alignSelf: 'flex-end'}} onClick={() => dispatch(removeFromCart(index))}>Remove</Button>
                            </div>
                        </ShoppingCartItem>
                    )
                })}
            </CheckoutList>
            
        </>
    )
}

export default Payment

