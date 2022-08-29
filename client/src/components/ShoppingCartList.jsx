import React from 'react';
import { Img, ImgDiv, Item } from './styledComponents/shoppingCart';

export default function ShoppingCartItem ({children, ...restProps}){
    return (
        <Item {...restProps}>{children}</Item>
    )
}

ShoppingCartItem.Image = function ShoppingCartItemImage({ ...restProps}){
    return (
        <ImgDiv>
            <Img alt='' {...restProps}/>
        </ImgDiv>
        
    )
}

ShoppingCartItem.Title = function ShoppingCartItemTitle({children, ...restProps}){
    return (
        <h4 {...restProps}>{children}</h4>
    )
}

ShoppingCartItem.Price = function ShoppingCartItemPrice({children, ...restProps}){
    return (
        <p {...restProps}>{`Price: $${children}`}</p>
    )
}

ShoppingCartItem.Footer = function ShoppingCartItemFooter({children, ...restProps}){
    return (
        <div {...restProps}>{children}</div>
    )
}