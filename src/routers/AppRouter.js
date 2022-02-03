import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserActivities } from '../actions/user';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { ActivitiesPage } from '../components/activities/ActivitiesPage';
import { MonthlyStatsPage } from '../components/stats/MonthlyStatsPage';
import { MonthlyActivitiesPage } from "../components/stats/MonthlyActivitiesPage";

import { NavBar } from '../components/ui/NavBar';


export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserActivities());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ActivitiesPage />} />
                <Route path="/monthly_stats" element={<MonthlyStatsPage />} />
                <Route path="/monthly_stats/*" element={<MonthlyActivities />} />
            </Routes>
        </BrowserRouter>
    )
}

export const MonthlyActivities = () => {

    return (
        <Routes>
            <Route path=":month" element={<MonthlyActivitiesPage />} />
        </Routes>
    )
}
