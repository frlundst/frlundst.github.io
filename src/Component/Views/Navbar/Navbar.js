import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MdWorkOutline } from 'react-icons/md';

function MyNavbar(props) {
    let navigate = useNavigate();

    return (
        <Navbar style={{ borderBottom: "1px solid black" }} bg="transparent" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Portfolio <MdWorkOutline></MdWorkOutline></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{marginLeft: "auto"}} >
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/projects")}>Projects</Nav.Link>
                        <Nav.Link onClick={() => navigate("/experience")}>Experience</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;