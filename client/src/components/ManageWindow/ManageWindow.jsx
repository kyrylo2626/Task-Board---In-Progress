import './ManageWindow.css';
import { FiEdit, FiPlus, FiTrash2  } from "react-icons/fi";

import { useContext } from 'react';
import { TaskWindowContext } from '../../components/TaskWindow/TaskWindowContext';
import { useEffect } from 'react';

export default function ManageWindow(props) {

    const { manageWindow, setManageWindow } = props;

    return (
        <>
            {
                manageWindow &&
                <div className={manageWindow === 'list' ? 'popuplist popupwin' : 'popupcard popupwin'}
                    onMouseLeave={() => setManageWindow(false)}>
                    <button className='popupbtn'><FiEdit className='popupicon'/>Edit</button>
                    {manageWindow === 'list' &&
                    <button className='popupbtn'>
                        <FiPlus className='popupicon'/>Add new card
                    </button>}
                    <button className='popupbtn' style={{color: 'red'}}>
                        <FiTrash2 className='popupicon' style={{stroke: 'red'}}/>Delete</button>
                </div>
            }
        </>
    )
}