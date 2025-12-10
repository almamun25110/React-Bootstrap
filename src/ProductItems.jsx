import { Button, Card, Col } from "react-bootstrap";

export default function ProductItems({props}) {
  return (
        <div className="col-lg-3 mb-4">
            <Card>
                <Card.Body>
                    <Card.Title>
                        {props.title}
                    </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
        </Card>
    </div>
  )
}
