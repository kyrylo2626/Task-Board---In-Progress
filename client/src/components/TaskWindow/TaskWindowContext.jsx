import { createContext } from "react";
import { useState } from 'react';

export const TaskWindowContext = createContext({
    details: { taskWindow: false, data: {'mode': 'create'} },
    setDetails: null
});

export const TaskWindowProvider = ({children}) => {

    const [ details, setDetails ] = useState({ taskWindow: false, data: {'mode': 'create'} });

    return <TaskWindowContext.Provider value={{ details, setDetails }}>
        {children}
    </TaskWindowContext.Provider>

}