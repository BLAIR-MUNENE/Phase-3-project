import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageNavigation from "../components/PageNavigation";
import Card from "react-bootstrap/Card";

function MyEvents() {
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MyEvents;
