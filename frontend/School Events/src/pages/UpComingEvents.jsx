import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";

function UpComingEvents() {
  return (
    <Container fluid style={{ width: "18rem", marginTop: "10px" }}>
      <PageNavigation />
      <>
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: "33px",
            marginTop: "20px",
          }}
        >
          Upcoming Events
        </h1>
      </>
      <Row>
        <Col>
          <Card
            style={{ width: "18rem", marginTop: "10px", objectFit: "fill" }}
          >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Navbar className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="/"></Navbar.Brand>
                  <Nav.Item>
                    <NavLink to="/book_Event">
                      <Button variant="dark">Book Event</Button>
                    </NavLink>
                  </Nav.Item>
                </Container>
              </Navbar>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            style={{ width: "18rem", marginTop: "10px", objectFit: "fill" }}
          >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Navbar className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="/"></Navbar.Brand>
                  <Nav.Item>
                    <NavLink to="/book_Event">
                      <Button variant="dark">Book Event</Button>
                    </NavLink>
                  </Nav.Item>
                </Container>
              </Navbar>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            style={{ width: "18rem", marginTop: "10px", objectFit: "fill" }}
          >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Navbar className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="/"></Navbar.Brand>
                  <Nav.Item>
                    <NavLink to="/book_Event">
                      <Button variant="dark">Book Event</Button>
                    </NavLink>
                  </Nav.Item>
                </Container>
              </Navbar>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            style={{ width: "18rem", marginTop: "10px", objectFit: "fill" }}
          >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Navbar className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="/"></Navbar.Brand>
                  <Nav.Item>
                    <NavLink to="/book_Event">
                      <Button variant="dark">Book Event</Button>
                    </NavLink>
                  </Nav.Item>
                </Container>
              </Navbar>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UpComingEvents;
