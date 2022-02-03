export const fetchUserActivities = () => {
    const now = Date.now();
    const currentDate = new Date(now * 1000);
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1; // (0-11)
    const currentDay = currentDate.getDate();

    console.log(now);

    if (currentMonth < 3) {
        currentYear = currentYear - 1;
        currentMonth = currentMonth + 12;
    }
    const from = new Date(currentYear, currentMonth - 3, currentDay).getTime() / 1000;

    console.log(from);

    //const token = '42c22f12ee48799d7a0f80ffac2c7ff7fb25afb1';

    //const url = `https://www.strava.com/api/v3/athlete/activities?access_token=${token}&before=${now}&after=${from}`;

    const url = 'http://localhost:3001/activities';

    //const bearer = `Bearer ${token}`;

    return async (dispatch) => {
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return dispatch(loadUserActivities(data));
            });

    }


}

export const loadUserActivities = (activities) => ({
    type: 'LOAD_ACTIVITIES',
    payload: {
        activities
    }
})