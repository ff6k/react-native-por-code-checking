import Dashboard from './Dashboard';
import { Routes } from '../../../app-config/constants';

const DashboardConfig = {
    name: Routes.SUBSCRIPTIONDASHBOARD,
    component: Dashboard,
    options: {
        headerShown: false,
    },
};

export default DashboardConfig;
