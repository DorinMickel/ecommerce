import styled from "styled-components";

export const ShoppingCartItems = styled.div`
    position: absolute;
    top: 50px;
    right: 5px;
    width: 20%;
    min-width: 400px;
    border-radius: 5px;
    box-shadow: 2px 2px 4px #7A7E81;
    background-color: white;
    padding: 10px;
    overflow: auto;
    max-height: 30rem;
    &::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }
    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }
`

export const Item = styled.div`
    display: flex;
    border-radius: 5px;
    box-shadow: 2px 2px 4px #7A7E81;
    padding: 5px;
    margin: 5px;
    max-height: 200px;
`

export const ImgDiv = styled.div`
    width: 30%;
    height: auto;
    padding-right: 5px;
    margin: 5px 0px;
    border-right: 1px solid grey;
`

export const Img = styled.img`
    width: auto;
    height: 100%;
`
