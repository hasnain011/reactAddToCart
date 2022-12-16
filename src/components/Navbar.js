import React, { useContext, useState } from 'react'
import {Button,Navbar,Modal} from 'react-bootstrap'
import { CartContext } from '../CartContext';
import CartProducts from './CartProducts';



const NavbarComponent = () => {
  const cart = useContext(CartContext);
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  return (
    <>
    <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerece Store</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow}>Cart {productCount} items</Button>
        </Navbar.Collapse>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
              <Modal.Title>
                Shopping Cart
              </Modal.Title>
         </Modal.Header>
        
              <Modal.Body>
                    {productCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map( (currentProduct, idx) => (
                                <CartProducts key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProducts>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success">
                                Purchase items!
                            </Button>
                        </>
                    :
                        <h1>There are no items in your cart!</h1>
                    }
                </Modal.Body>
              
    </Modal>
    </>
  )
}

export default NavbarComponent
