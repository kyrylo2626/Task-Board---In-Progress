import TaskList from '../TaskList/TaskList';
import { TasksService } from '../../service/TasksService'

import './Body.css';

export default function Body({taskLists}) {
    const { state, setState } = TasksService();

    let bodyDisplay = taskLists.length >= 5 ? 'block' : 'flex';

    return (
        <div className="body" id='scrollfield' style={{display: bodyDisplay}}>
            {taskLists.length !== 0
            ? taskLists?.map((taskList, index) => (
                state.tasks &&
                index !== taskLists.length-1
                    ? <TaskList taskList={taskList} setState={setState}
                        tasks={state.tasks.filter(tasks => tasks.list_id === taskList.list_id)[0]?.tasks || []} />
                    : <TaskList taskList={taskList} setState={setState} isLast={true}
                        tasks={state.tasks.filter(tasks => tasks.list_id === taskList.list_id)[0]?.tasks || []} />
                ))
            : <div className="emptyLists"><label className="emptyLists">There are no task lists yet</label></div>
            }
        </div>
    )
}