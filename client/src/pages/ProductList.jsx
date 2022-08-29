import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { Button } from '../components/styledComponents/form'
import { Wrapper } from '../components/styledComponents/productCard'
import { addToCart } from '../redux/reducers/shoppingCartReducer'


const ProductList = () => {
    const [productsList, setProductsList] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setProductsList(data)
        })
    }, [])

    const forwardToPayment = (product) => {
        addProductToCart(product)
        navigate(`/payment`)
    }

    const addProductToCart = (product) => {
        const productToAdd = {
            id: product.id,
            name: product.name,
            Image: product.imgUrl,
            price: product.price
        }
        dispatch(addToCart(productToAdd))
    }

    return (
        <Wrapper>
            {productsList.map(product => {
                return (
                    <ProductCard key={product.id}>
                        <ProductCard.Header>{product.name}</ProductCard.Header>
                            <ProductCard.Body>
                            <ProductCard.Image src={product.imgUrl}/>
                               <ProductCard.Desc>
                                    {product.description}
                                </ProductCard.Desc>
                            </ProductCard.Body>
                        <ProductCard.Footer>
                            <p>{`Price: $${product.price}`}</p>
                            <Button onClick={() => forwardToPayment(product)}>Buy me</Button>
                            <Button onClick={() => addProductToCart(product)}>Add to cart</Button>
                        </ProductCard.Footer>
                    </ProductCard>
                )
            })}
        </Wrapper>
    )
}

export default ProductList