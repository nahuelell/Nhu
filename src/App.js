import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function App() {

  return (  
  <div className='container'>
    <Container>
      <Row className="justify-content-center text-center" md={6}>
      <Col lg={4}>
        <h1>Hola Buen dia</h1>   
     </Col>
      </Row>
    </Container>
    
  </div>
  );
};
