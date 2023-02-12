import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MdWorkOutline } from 'react-icons/md';

function MyNavbar(props) {
    let navigate = useNavigate();
    var current = window.location.pathname;

    return (
        <Navbar style={{borderBottom: "1px solid black"}} bg="transparent" variant="light">
            <Container>
                <Navbar.Brand href="/">Portfolio <MdWorkOutline></MdWorkOutline></Navbar.Brand>
                <Nav>
                    <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                    <Nav.Link onClick={() => navigate("/projects")}>Projects</Nav.Link>
                    <Nav.Link onClick={() => navigate("/experience")}>Experience</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;