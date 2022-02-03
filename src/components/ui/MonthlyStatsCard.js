import { Card, Button, ListGroup, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const MonthlyStatsCard = ({ stats }) => {

    const time = stats.time;
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time - hour * 3600) / 60);
    const second = (time - hour * 3600) % 60;

    const url = stats.name || 'not_found';

    const navigate = useNavigate();

    const navigateTo = () => {
        navigate(`/monthly_stats/${url.toLowerCase()}`, { state: {index: stats.index} })
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Estadísticas de {stats.name}</Card.Title>
                    <ListGroup as="ol" className="my-4" variant="flush">
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Distance</div>
                            </div>
                            <Badge variant="primary" pill>
                                {stats.distance} m
                            </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Time</div>
                            </div>
                            <Badge variant="primary" pill>
                                {`${hour}h ${minute}' ${second}"`}
                            </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Elevation Gain</div>
                            </div>
                            <Badge variant="primary" pill>
                            {stats.elevation_gain} m
                            </Badge>
                        </ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary" onClick={navigateTo}>Ver Actividades</Button>
                </Card.Body>
            </Card>
        </>
    )
}