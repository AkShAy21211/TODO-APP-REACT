import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TodoModal from "./TodoModal";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



  return (
    <Fragment>
      <Container className="text-center mt-5">
        <Row>
          <Col>
            <h1>TODO APP 📝</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          <TodoModal/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
