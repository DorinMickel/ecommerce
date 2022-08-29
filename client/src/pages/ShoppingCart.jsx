import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Notification from '../components/Notfcations';
import ShoppingCartItem from '../components/ShoppingCartList';
import { Button } from '../components/styledComponents/form';
import { Inner } from '../components/styledComponents/productCard';
import { ShoppingCartItems } from '../components/styledComponents/shoppingCart';
import { removeFromCart } from '../redux/reducers/shoppingCartReducer';

const styles = {
    // marginRight: '10px',
    margin: '14px 20px 0px 0px'
}


const ShoppingCart = () => {
    const [showCart, setShowCart] = useState(false)
    const shoppingCartItems = useSelector((state) => state.shoppingCart.items)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleShow = () => {
        setShowCart(isShown => !isShown)
    }

    const sumTotal = () => {
        let totalSum = 0
        for(let i = 0; i < shoppingCartItems.length; i++){
            totalSum += shoppingCartItems[i].price
        }
        console.log(totalSum)
        return totalSum
    }

    const proceedToCheckout = () => {
        navigate(`/payment`)
    }

    return (
        <>
            <h2 style={styles} onClick={handleShow}>
                {shoppingCartItems.length > 0 && <Notification>{shoppingCartItems.length}</Notification>}
                <MdShoppingCart/>
            </h2>
            {showCart && 
            <ShoppingCartItems>
                <Inner>Your chosen items</Inner>
                {(shoppingCartItems.length > 0) ? 
                shoppingCartItems.map((item, index) => {
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
                }) : <h3>Your cart is currently empty</h3>}
                <ShoppingCartItem.Footer>
                    <p>{`You have a total of ${shoppingCartItems.length} products`}</p>
                    <p>{`Total price: $${sumTotal()}`}</p>
                    {shoppingCartItems.length > 0 && <Button onClick={proceedToCheckout}>Checkout</Button>}
                </ShoppingCartItem.Footer>
            </ShoppingCartItems>
            }
        </>
        
    )
}

export default ShoppingCart