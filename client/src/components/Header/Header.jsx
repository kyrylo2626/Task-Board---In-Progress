import './Header.css';
import { FiPlus, FiRotateCcw  } from "react-icons/fi";

export default function Header({setState}) {

    const createTaskList = () => { setState(prev => ({...prev, newTaskList: 'New Task'})) }

    return (
        <div className="header">
            <h2 className="title">My Task Board</h2>
            <div className='headerbtns'>
                <button className='btn history_button'><FiRotateCcw className='iconre'/>&nbsp;History</button>
                <button className='btn create_button' onClick={createTaskList}>
                    <FiPlus className='iconplus'/>&nbsp;Create new list</button>
            </div>
        </div>
    )
}