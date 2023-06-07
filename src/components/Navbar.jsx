import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerInsideExample() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <a href='/' className='link'>
            <Navbar.Brand> Home</Navbar.Brand>
        </a>
        <a href='/' className='link'>
            <Navbar.Brand> Running</Navbar.Brand>
        </a>
        <a href='/' className='link'>
            <Navbar.Brand> Active</Navbar.Brand>
        </a>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;