import React from 'react'
import './TrainingCard.css'

const TrainingCard = () => {
    return (
        <div className='TrainingCard'>
            <p className='graph-title'>Monthly Training Activity</p>
            <p> <span>16% more enrollees this month</span> </p>
            <div className='activities'>
                <div className='flex-align gap-10 activity'>
                    <div className='blue-round'></div>
                    <div className='activity-detail'>
                        <h3>course a</h3>
                        <small>23 workers took this course this week</small>
                    </div>
                    <div className='verticle-line'></div>
                </div>
                <div className='flex-align gap-10 activity'>
                    <div className='blue-round'></div>
                    <div className='activity-detail'>
                        <h3>course b</h3>
                        <small>253 workers took this course this week</small>
                    </div>
                    <div className='verticle-line'></div>
                </div>
                <div className='flex-align gap-10 activity'>
                    <div className='blue-round'></div>
                    <div className='activity-detail'>
                        <h3>course c</h3>
                        <small>253 workers took this course this week</small>
                    </div>
                    <div className='verticle-line'></div>
                </div>
                <div className='flex-align gap-10 activity'>
                    <div className='blue-round'></div>
                    <div className='activity-detail'>
                        <h3>course d</h3>
                        <small>253 workers took this course this week</small>
                    </div>
                    {/* <div className='verticle-line'></div> */}
                </div>
            </div>
        </div>
    )
}

export default TrainingCard