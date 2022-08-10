import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
function NavbarEx() {
  return (
    <Navbar bg="dark" expand="lg" className="Navbar">
      <Container>
   <a href="/tradeTable" style={{color:"white"}}>Trades     </a>
   <a href="/security" style={{color:"white"}}>Security</a>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/tradeTable">Trades</Nav.Link><br/>
            <Nav.Link href="/security">Security</Nav.Link>
           
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default NavbarEx;