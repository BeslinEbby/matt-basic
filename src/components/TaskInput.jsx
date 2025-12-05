import React from 'react'

const TaskInput = ({inputRef, input, setInput, storeTasks, btnText}) => {
  return (
     <div className='input-sec'>
        <input
           ref={inputRef}
           required
           type="text"
           placeholder="Enter items..."
           value={input}
           onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={input?.length === 0} onClick={storeTasks}>
          {btnText}
        </button>
     </div>
  );
}

export default TaskInput