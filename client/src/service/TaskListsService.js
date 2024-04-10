import { useState, useEffect } from 'react';


export function TaskListsService() {

    const TASKLIST_URL = 'http://localhost:5000/api/lists';

    const [state, setState] = useState({ taskLists: [], newTaskList: null, deletedTaskList: null, patchedTaskList: null });

    const getTaskLists = () => {
        fetch(TASKLIST_URL)
        .then(response => response.json())
        .then(response => { setState(prev => ({ ...prev, taskLists: response })) })
    }

    const postTaskList = () => {
        fetch(TASKLIST_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({"name": state.newTaskList})
        })

        return () => { setState(prev => ({ ...prev, newTaskList: null }))}
    }

    const deleteTaskList = () => {
        fetch(`${TASKLIST_URL}:${state.deletedTaskList}`, { method: 'DELETE' })

        return () => { setState(prev => ({ ...prev, deletedTaskList: null }))}
    }

    const patchTaskList = () => {
        fetch(`${TASKLIST_URL}:${state.patchedTaskList.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({"name": state.patchedTaskList.name})
        })

        return () => { setState(prev => ({ ...prev, patchedTaskList: null }))}
    }

    useEffect(() => {
        if (state.newTaskList) { postTaskList() }
        else if (state.deletedTaskList) { deleteTaskList() }
        else if (state.patchedTaskList) { patchTaskList() }
        
        getTaskLists();
    }, [state.newTaskList, state.deletedTaskList, state.patchedTaskList])
    
    
    return { state, setState };
                                
}
