import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ContainerInsideExample() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Link to='/'>
            <Navbar.Brand> Home</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;