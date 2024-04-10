import './TaskRead.css';

export default function TaskRead() {
    return (
        <div className='wrapper'>
            <div className="taskread">
                <div className='readheader'>
                    <button className='readclose'>×</button>
                </div>
                <div className='readinfo'>
                    <div className='dsb infoheader'>
                        <label className='text18'>Task name</label>
                        <button className='infobutton'>Edit task</button>
                    </div>
                    <div className='taskprops'>
                        <div className='taskprop'>
                            <label className='propname'>Status</label>
                            <label className='text14'>In progress</label>
                        </div>
                        <div className='taskprop'>
                            <label className='propname'>Due date</label>
                            <label className='text14'>Wed, 29 April</label>
                        </div>
                        <div className='taskprop'>
                            <label className='propname'>Priority</label>
                            <label className='text14'>Medium</label>
                        </div>
                    </div>
                    <label className='text18'>Description</label><br /><br />
                    <div className='infotext' id='scrollfield'>
                        <label className='text500'>
                            Your task is to develop a Proof Of Conccept (PoC) of a Personal Project Management Tool
                            (Task Board). Below are the specific features and requirements.
                        </label><br /><br />
                        <label className='text500'>
                            Your task is to develop a Proof Of Concept (PoC) of a Personal Project Management Tool
                            (Task Board). Below are the specific features and requirements.
                        </label><br /><br />
                        <label className='text500'>
                            Your task is to develop a Proof Of Concept (PoC) of a Personal Project Management Tool
                            (Task Board). Below are the specific features and requirements.
                        </label><br /><br />
                        <label className='text500'>
                            Your task is to develop a Proof Of Concept (PoC) of a Personal Project Management Tool
                            (Task Board). Below are the specific features and requirements.
                        </label><br /><br />
                        <label className='text500'>
                            Your task is to develop a Proof Of Concept (PoC) of a Personal Project Management Tool
                            (Task Board). Below are the specific features and requirements.
                        </label><br /><br />
                        <label className='text500'>
                            Your task is to develop a Proof Of Concept (PoC) of a Personal Project Management Tool
                            (Task Board). Below are the specific features and requirements. Your task is to develop a Proof Of Concept (PoC) of a Personal Project Management Tool
                            (Task Board). Below are the specific features and requirements. Your task is to develop a Proof Of Concept (PoC) of a Personal Project Management Tool
                            (Task Board). Below are the specific features and requirements. Your task is to develop a Proof Of Concept (PoC) of a Personal Project Management Tool
                            (Task Board). Below are the specific features and requirements.
                        </label>

                    </div>
                </div>
                <div className='readactivity'>
                    <label className='text18'>Activity</label><br /><br />
                    <div className='infoactivity' id='scrollfield'>
                        <div className='dsb'>
                            <label className='text500 actinfo'>• Anton Koval created this task</label>
                            <label className='text500 actdate'>05.03.24<br />5:10 pm</label>
                        </div><br />
                        <div className='dsb'>
                            <label className='text500 actinfo'>• You changed status from ⦿ To Do to ⦿ In Progress</label>
                            <label className='text500 actdate'>12.03.24<br />5:10 pm</label>
                        </div><br />
                        <div className='dsb'>
                            <label className='text500 actinfo'>• You renamed wef bwefbwe wefbwoufg wefouwbefuwb wefuwbef wiegbwiegb wgihwbgiwb this task from ⦿ Task Name to ⦿ Task Name 2</label>
                            <label className='text500 actdate'>05.13.24<br />5:10 pm</label>
                        </div><br />
                        <div className='dsb'>
                            <label className='text500 actinfo'>• Anton Koval created this task</label>
                            <label className='text500 actdate'>05.03.24<br />5:10 pm</label>
                        </div><br />
                        <div className='dsb'>
                            <label className='text500 actinfo'>• You changed status from ⦿ To Do to ⦿ In Progress</label>
                            <label className='text500 actdate'>12.03.24<br />5:10 pm</label>
                        </div><br />
                        <div className='dsb'>
                            <label className='text500 actinfo'>• You renamed this task from ⦿ Task Name to ⦿ Task Name 2</label>
                            <label className='text500 actdate'>05.13.24<br />5:10 pm</label>
                        </div><br />
                        <div className='dsb'>
                            <label className='text500 actinfo'>• Anton Koval created this task</label>
                            <label className='text500 actdate'>05.03.24<br />5:10 pm</label>
                        </div><br />
                        <div className='dsb'>
                            <label className='text500 actinfo'>• You changed status from ⦿ To Do to ⦿ In Progress</label>
                            <label className='text500 actdate'>12.03.24<br />5:10 pm</label>
                        </div><br />
                        <div className='dsb'>
                            <label className='text500 actinfo'>• You renamed this task from ⦿ Task Name to ⦿ Task Name 2</label>
                            <label className='text500 actdate'>05.13.24<br />5:10 pm</label>
                        </div><br />
                        <div className='dsb'>
                            <label className='text500 actinfo'>• Anton Koval created this task</label>
                            <label className='text500 actdate'>05.03.24<br />5:10 pm</label>
                        </div><br />
                        <div className='dsb'>
                            <label className='text500 actinfo'>• You changed status from ⦿ To Do to ⦿ In Progress</label>
                            <label className='text500 actdate'>12.03.24<br />5:10 pm</label>
                        </div><br />
                        <div className='dsb'>
                            <label className='text500 actinfo'>• You renamed this task from ⦿ Task Name to ⦿ Task Name 2</label>
                            <label className='text500 actdate'>05.13.24<br />5:10 pm</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overlay"></div>
        </div>
    )
}