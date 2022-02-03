import { Table } from "react-bootstrap";

export const ActivitiesTable = ({ activities }) => {

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Activity Name</th>
                        <th>Date</th>
                        <th>Distance</th>
                        <th>Time</th>
                        <th>Elevation Gain</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map(activity => {
                        return (
                            <tr key={activity.id}>
                                <td>{activity.name}</td>
                                <td>{activity.date}</td>
                                <td>{activity.distance}</td>
                                <td>{activity.time}</td>
                                <td>{activity.elevation_gain}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}