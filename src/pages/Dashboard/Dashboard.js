import React from 'react'
import StatsAreaGraps from '../../components/templets/StatsAreaGraps/StatsAreaGraps'
import StatusCard from '../../components/organisms/StatusCard/StatusCard'
import BiWeekBarChart from '../../components/organisms/BiWeekBarChart/BiWeekBarChart'
import DailyBarChart from '../../components/organisms/DailyBarChart/DailyBarChart'
import QuizeChart from '../../components/organisms/QuizeChart/QuizeChart'
import TrainingCard from '../../components/organisms/TrainingCard/TrainingCard'

import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <div className='dashboard-container'>
                <StatsAreaGraps />
                <BiWeekBarChart />
                <StatusCard />
                <TrainingCard />
                <QuizeChart />
                <DailyBarChart />
            </div>
        </div>
    )
}

export default Dashboard