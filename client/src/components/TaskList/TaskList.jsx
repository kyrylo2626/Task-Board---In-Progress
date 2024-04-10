import ManageWindow from '../ManageWindow/ManageWindow';
import TaskCard from '../TaskCard/TaskCard';
import './TaskList.css';
import { FiMoreVertical, FiPlus } from "react-icons/fi";
import { useState } from 'react';

import { useContext } from 'react';
import { TaskWindowContext } from '../../components/TaskWindow/TaskWindowContext';


export default function TaskList(props) {

    const [ manageWindow, setManageWindow ] = useState(false);
    const { setDetails } = useContext(TaskWindowContext);

    const createTask = () => { setDetails(prev => ({...prev, data: {mode: 'create', taskList: props.taskList}, taskWindow: true})) }

    return (
        <div className="tasklist" style={props.isLast && {marginRight: 0}}>
            <ManageWindow manageWindow={manageWindow} setManageWindow={setManageWindow} />
            <div className='listheader'>
                <label className='listname'>{props.taskList.name}</label>
                <label>{props.taskList.count}</label>
                <button className='pointBtn' onClick={() => setManageWindow('list')}><FiMoreVertical className='iconpointslist iplh'/></button>
            </div>
            <button className='addbutton' onClick={createTask}><FiPlus className='iconpointslist'/>&nbsp;Add new card</button>
            <div className='cardlist'>
                {props.tasks.length !== 0
                ? props.tasks.map(task => ( <><TaskCard task={task} setState={props.setState} /><br /></> ))
                : <div className='emptyList'><label className='emptyList'>There are no tasks yet</label></div>
                }
            </div>
        </div>
    )
}