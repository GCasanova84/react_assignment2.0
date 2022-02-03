export const fetchUserActivities = () => {
    const now = Date.now();
    const currentDate = new Date(now);
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1; // (0-11)
    const currentDay = currentDate.getDate();

    if (currentMonth < 3) {
        currentYear = currentYear - 1;
        currentMonth = currentMonth + 12;
    }
    const from = new Date(currentYear, currentMonth - 4, currentDay).getTime();

    //const token = '42c22f12ee48799d7a0f80ffac2c7ff7fb25afb1';

    //const url = `https://www.strava.com/api/v3/athlete/activities?access_token=${token}&before=${now}&after=${from}`;

    const url = 'http://localhost:3001/activities';

    //const bearer = `Bearer ${token}`;

    return async (dispatch) => {
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                let activities = [];
                for (let index = 0; index < 60; index++) {
                    const randomActivity = Math.floor(Math.random() * 4);
                    const randomDate = Math.floor(from + Math.random()*(now + 1 - from));
                    const randomDistance = Math.floor(4000 + Math.random() * (10000 + 1 - 4000));
                    const randomElevation = Math.floor(-1000 + Math.random() * (1000 + 1 + 1000));
                    let activity = {
                        ...data[randomActivity],
                        date: randomDate,
                        distance: data[randomActivity].distance * randomDistance,
                        time: data[randomActivity].time === 0? 5400 : randomDistance * 2,
                        elevation_gain: data[randomActivity].elevation_gain * randomElevation
                    }
                    activities.push(activity)
                }
                activities = activities.sort((a, b) => a.date - b.date).reverse();
                activities.forEach((activity, index) => {
                    activity.id = index + 1;
                })
                return dispatch(loadUserActivities(activities));
            });

    }


}

export const loadUserActivities = (activities) => ({
    type: 'LOAD_ACTIVITIES',
    payload: {
        activities
    }
})