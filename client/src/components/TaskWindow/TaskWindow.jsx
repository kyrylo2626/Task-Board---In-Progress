import './TaskWindow.css';
import { FiTag, FiCalendar, FiCrosshair, FiX } from "react-icons/fi";
import { TaskWindowUtils } from './TaskWindowUtils';

import { useContext } from 'react';
import { TaskWindowContext } from './TaskWindowContext';
import { TasksService } from '../../service/TasksService';

export default function TaskWindow() {

    const { details, setDetails } = useContext(TaskWindowContext);
    const fields = TaskWindowUtils(details.data);

    if (details.data.mode !== 'read') { const { setState } = TasksService() };

    const closeTaskWindow = () => setDetails(prev => ({...prev, taskWindow: false}))

    return (
        <>
        {
            details.taskWindow &&
            <div className='modal-window'>
                <div className='wrapper'>
                    <div className="taskwindow">
                        <div className='tskwheader'>
                            <button className='tskwclose' onClick={closeTaskWindow}>
                                <FiX className='iconclose'/></button>
                        </div>
                        <div className='tskwinfo'>
                            <div className='dsb infoheader'>{fields.header}</div>
                            <div className='taskprops'>
                                <div className='taskprop'>
                                    <FiCrosshair className='icon'/>
                                    <label className='propname'>Status</label>{fields.status}
                                </div>
                                <div className='taskprop'>
                                    <FiCalendar className='icon'/>
                                    <label className='propname'>Due date</label>{fields.dueDate}
                                </div>
                                <div className='taskprop'>
                                    <FiTag className='icon' />
                                    <label className='propname'>Priority</label>{fields.priority}
                                </div>
                            </div>
                            <label className='text18'>Description</label><br /><br />{fields.text}
                        </div>
                        <div className='tskwactivity'>
                            <label className='text18'>Activity</label><br /><br />
                            <div className='infoactivity' id='scrollfield'>
                                {details.data.mode === 'create'
                                ? <div className='emptyList'><label className='emptyList'>There is no activity yet</label></div>
                                : <><div className='dsb'>
                                    <label className='text500 actinfo'>• Anton Koval created this task</label>
                                    <label className='text500 actdate'>05.03.24<br />5:10 pm</label>
                                </div><br /></>
                                }
                                
                            </div>
                        </div>
                    </div>
                    <div className="overlay" onClick={closeTaskWindow}></div>
                </div>
            </div>
        }
        </>
    )
}