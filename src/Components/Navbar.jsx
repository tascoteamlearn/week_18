import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function Nav() {
    const {cart} = useSelector(state=> state.product )

    console.log("see cart", cart)

  return (
    <div>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Toko Online</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Keranjang {cart.length}
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
