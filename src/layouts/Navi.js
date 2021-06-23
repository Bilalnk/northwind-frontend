import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import Signin from './Signin'
import Signout from './Signout'
import { useSelector } from 'react-redux'

function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const { cartItems } = useSelector(state => state.cart) //storedan cart 'ı cartItems a atar

    const history = useHistory()

    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }
    

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>

                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />
                    <Menu.Menu position='right'>

                        {cartItems.length > 0 && <CartSummary/>}

                        {isAuthenticated ? <Signin signOut = {handleSignOut}/> : <Signout signIn = {handleSignIn} />}

                    </Menu.Menu>

                </Container>
            </Menu>
        </div>
    )
}

export default Navi
