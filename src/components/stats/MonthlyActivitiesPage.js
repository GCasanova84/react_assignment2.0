import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";

import { ActivitiesTable } from "../ui/ActivitiesTable";

export const MonthlyActivitiesPage = () => {

    const location = useLocation();
    const index = location.state.index;

    const state = useSelector(state => state);

    const now = Date.now();
    const currentDate = new Date(now);
    let currentMonth = currentDate.getMonth();

    const activitiesPerMonth = [[], [], []];

    state.user.forEach(activity => {
        const date = new Date(activity.date);
        const month = date.getMonth();
        console.log(month)
        //TODO: corregir algoritmo
        const monthIndex = Math.abs(currentMonth - month);
        if (monthIndex < 3) {
            activitiesPerMonth[monthIndex].push(activity);
        }
    });
    const monthlyActivities = activitiesPerMonth[index];

    const params = useParams();

    const month = params.month.charAt(0).toUpperCase() + params.month.slice(1)

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Row className="text-center mb-4">
                        <h1>Actividades de {month}</h1>
                    </Row>
                    <ActivitiesTable activities={monthlyActivities} />
                </Col>
            </Row>
        </Container>
    )
}