import './TaskCard.css';
import ManageWindow from '../ManageWindow/ManageWindow';
import { FiMoreVertical, FiCalendar, FiChevronDown  } from "react-icons/fi";
import { useContext } from 'react';
import { TaskWindowContext } from '../../components/TaskWindow/TaskWindowContext';
import { useState } from 'react';

export default function TaskCard(props) {
    const { task } = props;
    const { setDetails } = useContext(TaskWindowContext);
    const [ manageWindow, setManageWindow ] = useState(false);

    const setTaskWindow = (e) => {
        if (e.target.parentElement.id !== 'pointsBtn') {
            setDetails(prev => ({...prev, data: {...task, mode: 'read'}, taskWindow: true}))
        }
    }

    return (
        <div className="crs taskcard" onClick={(e) => setTaskWindow(e)}>
            <ManageWindow manageWindow={manageWindow} setManageWindow={setManageWindow} />
            <div className="crs taskheader">
                <label>{task.name}</label>
                <button id='pointsBtn' className='pointBtn'
                    onClick={() => setManageWindow('card')}>
                        <FiMoreVertical id='pointsBtn' className='iconpointscard ipc'/></button>
            </div>
            <label className='crs tasktext'>{task.description}</label><br />
            <div className='carddate'>
                <FiCalendar className='icondate'/>
                <label className='crs taskdue'>{task.date}</label><br />
            </div>
            <label className='crs taskpriority'>• {task.priority.name}</label><br />
            <button className='taskbutton'>
                <label className='crs'>Move to:</label>
                <FiChevronDown className='crs iconpointscard'/>
            </button>
        </div>
            
    )
}

