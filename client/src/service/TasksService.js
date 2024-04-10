import { useState, useEffect } from 'react';


export function TasksService() {

    const [state, setState] = useState({ tasks: [], newTask: '', editedTask: '' });

    useEffect(() => {
        // if (state.newTask) {
        //     fetch('http://localhost:5000/api/tasks', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json; charset=utf-8' },
        //         body: JSON.stringify(state.newTask)
        //     })
        // } else if (state.editedTask) {
        //     fetch('http://localhost:5000/api/tasks', {
        //         method: 'PATCH',
        //         headers: { 'Content-Type': 'application/json; charset=utf-8' },
        //         body: JSON.stringify(state.editedTask)
        //     })
        // }

        fetch('http://localhost:5000/api/tasks')
        .then(response => response.json())
        .then(response => { setState(prev => ({ ...prev, tasks: response })) })

        return () => { setState(prev => ({ ...prev, newTask: '', editedTask: '' }))}

    }, [state.newTask, state.editedTask])
    
    return { state, setState };
                                
}
