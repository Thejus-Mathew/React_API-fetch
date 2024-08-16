import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>

        <Navbar className="bg-info text-light fw-5">
            <Container>
            <Navbar.Brand href="#home" className='text-light fs-1'>
                <img 
                alt=""
                src="https://i.pinimg.com/originals/e3/4e/81/e34e81b59a80ca72811690b231d721e7.gif"
                width="80"
                height="80"
                className="d-inline-block align-center me-2"
                />{' '}
                API Fetch
                <i className="fa-solid fa-dog fa-bounce text-light fw-5 ms-2"></i>
            </Navbar.Brand>
            </Container>
        </Navbar>
      
    </div>
  )
}

export default Header
