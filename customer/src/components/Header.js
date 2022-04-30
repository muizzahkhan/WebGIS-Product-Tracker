import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
              <LinkContainer to='/'><Navbar.Brand className='center-navbar' href='/'>Product Tracker</Navbar.Brand></LinkContainer>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>

              <Nav className='ms-auto'>
                <NavDropdown title='Download Shops' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#KML'>KML format</NavDropdown.Item>
                  <NavDropdown.Item href='#GeoJSON'>GeoJSON format</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Nav className='ms-auto'>
                <LinkContainer to='/login'><Nav.Link><i className='fas fa-user'></i>Login as Store Owner</Nav.Link></LinkContainer>
              </Nav>

              </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header