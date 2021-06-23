import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { Label } from 'semantic-ui-react'

function CartSummary() {

    const { cartItems } = useSelector(state => state.cart) //storedan cart 'ı cartItems a atar

    return (
        <div>
            <Dropdown item text='Sepetim'>
                <Dropdown.Menu>
                    {cartItems.map((cartItem => (
                        <Dropdown.Item>{cartItem.product.productName}
                            <Label>
                                {cartItem.quantity}
                            </Label>
                        </Dropdown.Item>
                    )))}

                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item as={NavLink} to={"/cart"}>Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default CartSummary
