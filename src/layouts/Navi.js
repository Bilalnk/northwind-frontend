import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import Signin from './Signin'
import Signout from './Signout'

function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
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

                        <CartSummary></CartSummary>

                        {isAuthenticated ? <Signin signOut = {handleSignOut}/> : <Signout signIn = {handleSignIn} />}

                    </Menu.Menu>

                </Container>
            </Menu>
        </div>
    )
}

export default Navi
