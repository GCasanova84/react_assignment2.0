import { useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { MonthlyStatsCard } from "../ui/MonthlyStatsCard";

export const MonthlyStatsPage = () => {

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const now = Date.now();
    const currentDate = new Date(now);
    let currentMonth = currentDate.getMonth();
    console.log(currentMonth)

    const state = useSelector(state => state);

    const activitiesPerMonth = [[], [], []];
    const statsPerMonth = [];

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

    activitiesPerMonth.forEach((month, index) => {
        const distance = month.reduce((a, b) => a + b.distance, 0);
        const time = month.reduce((a, b) => a + b.time, 0);
        const elevation_gain = month.reduce((a, b) => a + b.elevation_gain, 0);
        statsPerMonth.push({
            index,
            name: months[currentMonth - index],
            distance,
            time,
            elevation_gain
        })
    })

    return (
        <>
            <Row className="text-center mb-4 mt-5">
                <h1>Estadísticas Mensuales</h1>
            </Row>
            <Container className="mt-3">
                {
                    statsPerMonth.map((stats, index) => {
                        return (
                            <Row className="justify-content-md-center mb-3" key={index}>
                                <Col md={8}>
                                    <MonthlyStatsCard stats={stats} />
                                </Col>
                            </Row>
                        )
                    })
                }
            </Container>
        </>
    )
}