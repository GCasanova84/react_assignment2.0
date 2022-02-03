import { useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { ActivitiesTable } from "../ui/ActivitiesTable";

export const ActivitiesPage = () => {

    const state = useSelector(state => state);

    return (
        <>
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md={8}>
                        <ActivitiesTable activities={state.user} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}