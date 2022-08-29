import React from "react";
import { Button, Form, FormGroupItem, Input, Label } from "./styledComponents/form";

const PaymentForm = () => {
    return (
        <Form>
            <FormGroupItem>
                <Label>Card holder name: </Label>
                <Input type='text'/>
            </FormGroupItem>
            <FormGroupItem>
                <Label>Card number: </Label>
                <Input type='text'/>
            </FormGroupItem>
            <FormGroupItem>
                <Label>Experation date: </Label>
                <Input type='date'/>
            </FormGroupItem>
            <FormGroupItem>
                <Label>CCV: </Label>
                <Input type='text'/>
            </FormGroupItem>
            <Button>Pay</Button>
        </Form>
    )
}

export default PaymentForm