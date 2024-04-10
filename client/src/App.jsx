import './App.css';

import React from 'react';

import Header from './components/Header/Header'
import Body from './components/Body/Body';
import TaskWindow from './components/TaskWindow/TaskWindow';

import { TaskListsService } from './service/TaskListsService'


function App() {

  const { state, setState } = TaskListsService();

  return (
    <>
      <div className="main">
        <Header setState={setState}/>
        <Body taskLists={state.taskLists}/>
      </div>
      <TaskWindow />
    </>
  );
}

export default App;
