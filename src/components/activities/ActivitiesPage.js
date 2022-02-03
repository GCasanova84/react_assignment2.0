import { useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { ActivitiesTable } from "../ui/ActivitiesTable";

export const ActivitiesPage = () => {

    const state = useSelector(state => state);

    const recentActivities = state.user.slice(0, 15);

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Row className="text-center mb-4">
                        <h1>Actividades Recientes</h1>
                    </Row>
                    <ActivitiesTable activities={recentActivities} />
                </Col>
            </Row>
        </Container>
    )
}