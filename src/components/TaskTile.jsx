import React from 'react'

const TaskTile = ({item, index}) => {
  return (
           <div key={index} className='task-tile'>
              <span>{item}</span>
              <div>
                 <i className="fa-solid fa-trash" onClick={() => deleteItem(index)}></i>
                 <i className="fa-solid fa-edit" onClick={() => editItem(index)}></i>
              </div>
           </div>
  );
}

export default TaskTile