import React from 'react'

const TaskTile = ({item, index, editTask, deleteTask}) => {
  return (
           <div key={index} className='task-tile'>
              <span>{item}</span>
              <div>
                 <i className="fa-solid fa-trash" onClick={() => deleteTask(index)}></i>
                 <i className="fa-solid fa-edit" onClick={() => editTask(index)}></i>
              </div>
           </div>
  );
}

export default TaskTile