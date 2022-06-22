import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/esm/Badge'
import { Store } from './Store';


export default function NavbarComponent() {
  const { state } = useContext(Store);
  const { cart } = state

  return (
    <div>
      <Navbar bg='primary' variant='dark' className='p-3'>
        <Container >
          <LinkContainer to='/'>
            <Navbar.Brand>TCG-Hero</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>

  )
}
