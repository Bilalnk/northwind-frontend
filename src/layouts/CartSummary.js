import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'


function CartSummary() {
    return (
        <div>
            <Dropdown item text='Sepetim'>
                <Dropdown.Menu>
                    <Dropdown.Item>Acer Laptop</Dropdown.Item>
                    <Dropdown.Item>Asusu Laptop</Dropdown.Item>
                    <Dropdown.Item>Dell Laptop</Dropdown.Item>
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item as={NavLink} to={"/cart"}>Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default CartSummary
