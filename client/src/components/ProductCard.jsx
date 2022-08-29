import React from 'react'
import { Container, Image, Inner, P } from './styledComponents/productCard'

export default function ProductCard({children, ...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}

ProductCard.Header = function ProductCardHeader({children, ...restProps}){
    return <h2 {...restProps}>{children}</h2>
}

ProductCard.Body = function ProductCardBody({children, ...restProps}){
    return <div {...restProps}>{children}</div>
}

ProductCard.Image = function ProductCardImage({children, ...restProps}){
    return (
        <Inner>
            <Image alt='' {...restProps}/>
        </Inner>
        
    )
}

ProductCard.Desc = function ProductCardDesc({children, ...restProps}){
    return (
        <Inner {...restProps}>
            <P>{children}</P>
        </Inner>
    )
}

ProductCard.Footer = function ProductCardFooter({children, ...restProps}){
    return <div {...restProps}>{children}</div>
}