import { FiEdit } from "react-icons/fi";

export function TaskWindowUtils(props) {

    let fields = {};

    if (props.mode === 'read') {

        fields['header'] = <><label className='text18'>{props.name}</label>
                           <button className='infobutton'><FiEdit className='iconedit'/>&nbsp;Edit task</button></>
        fields['text'] = <div className='infotext' id='scrollfield'>
                         <label className='text500'>{props.description}</label></div>      
        fields['status'] = <label className='text14'>{props.task_lists.name}</label>
        fields['dueDate'] = <label className='text14'>{props.date}</label>
        fields['priority'] = <label className='text14'>{props.priority.name}</label>

    } else if (props.mode === 'create') {
        
        fields['header'] = <><label className='text18'>Task name:</label>
                           <input type='text' className='nameinput' placeholder='Type task name' /></>
        fields['text'] = <div className='infotext'>
                         <textarea className='text500 textinput' id='scrollfield' placeholder='Type task'/></div>
        fields['status'] = <label className='text14'>{props.taskList?.name}</label>
        fields['dueDate'] = <label className='text14'>Wed, 6 Jan</label>
        fields['priority'] = <label className='text14'>createP</label>
        
    } else if (props.mode === 'edit') {

        fields['header'] = <><label className='text18'>Task name:</label>
                           <input type='text' className='nameinput' placeholder='Type task name' /></>
        fields['text'] = <div className='infotext'>
                         <textarea className='text500 textinput' id='scrollfield' placeholder='Type task'/></div>
        fields['status'] = <label className='text14'>editStatus</label>
        fields['dueDate'] = <label className='text14'>Wed, 6 Jan</label>
        fields['priority'] = <label className='text14'>editP</label>
    }

    return fields;

}