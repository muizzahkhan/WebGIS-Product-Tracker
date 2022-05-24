import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useLocation} from 'react-router-dom'

const Header = () => {

  const location = useLocation()

  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
              <LinkContainer to='/'><Navbar.Brand className='center-navbar'>Product Tracker</Navbar.Brand></LinkContainer>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>

              <Nav className='ms-auto'>
                <NavDropdown title='Download Shops' id='basic-nav-dropdown'>
                  <LinkContainer to='/KML'><NavDropdown.Item>KML format</NavDropdown.Item></LinkContainer>
                  <LinkContainer to='/GeoJSON'><NavDropdown.Item>GeoJSON format</NavDropdown.Item></LinkContainer>
                </NavDropdown>
              </Nav>

              <Nav className='ms-auto'>
                {location.pathname==='/Admin/' ? <LinkContainer to='/'><Nav.Link><i className='fas fa-user'></i>Logout</Nav.Link></LinkContainer> :
                location.pathname==='/' ? <LinkContainer to='/storeowner/login'><Nav.Link><i className='fas fa-user'></i>Login as Store Owner</Nav.Link></LinkContainer>
                : null}
              </Nav>

              </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header