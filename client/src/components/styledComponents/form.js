import styled from "styled-components";

export const FormWrapper = styled.div`
    border-radius: 5px;
    box-shadow: 2px 2px 4px #7A7E81;
    width: 30%;
    margin: auto;
    
`

export const Form = styled.form`
    padding: 5px;
    display: flex;
    flex-direction: column;
`

export const FormGroupItem = styled.div`
    padding: 5px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
`

export const Input = styled.input`
    width: 40%;
    margin-right: 40px;
    border-radius: 3px;
    border: solid 1px grey;
    &:hover{
        box-shadow: 1px 1px 2px #7A7E81;
        border: solid 1px grey;
        border-radius: 3px;
    }
    &:focus-visible{
        outline: none
    }
`

export const Label = styled.label`
    margin-left: 40px;
`

export const Button = styled.button`
    width: 30%;
    align-self: center;
    margin: 20px;
    background-color: rgb(243,206,198);
    border: grey 1px solid;
    border-radius: 3px;
    padding: 5px;
    &:hover{
        box-shadow: 2px 2px 4px #7A7E81;
    }
`