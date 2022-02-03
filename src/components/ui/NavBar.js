import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";

export const NavBar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container fluid className='px-5'>
                    <Navbar.Brand href="">STRAVA</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Recent Activities</Nav.Link>
                        <Nav.Link as={Link} to="/monthly_stats">Monthly Stats</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}