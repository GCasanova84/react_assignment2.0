import { Table } from "react-bootstrap";

export const ActivitiesTable = ({ activities }) => {

    return (
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
                        const date = new Date(activity.date);
                        const year = date.getFullYear();
                        const month = date.getMonth() + 1; // (0-11)
                        const day = date.getDate();
                        const time = activity.time;
                        const hour = Math.floor(time / 3600);
                        const minute = Math.floor((time - hour * 3600)/ 60);
                        const second = (time - hour * 3600)% 60;
                        return (
                            <tr key={activity.id}>
                                <td>{activity.name}</td>
                                <td>{`${day}-${month}-${year}`}</td>
                                <td>{activity.distance === 0? '--':`${activity.distance} m`}</td>
                                <td>{`${hour}h ${minute}' ${second}"`}</td>
                                <td>{activity.elevation_gain === 0? '--':`${activity.elevation_gain} m`}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
    )
}