import { Container, Row } from 'react-bootstrap';
import './App.css';
import ProductItems from './ProductItems';
import { blog } from './data/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faFacebook} className='text-danger'/>
      <Container>
        <Row>
          {blog.map((v,i)=>{
            return(
              <ProductItems props={v} key={i}/>
            )
          })}
        </Row>
      </Container>
     
    </div>
  );
}

export default App;
