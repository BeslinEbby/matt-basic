import React, { useRef, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskTile from "./components/TaskTile";

const App = () => {
   const [input, setInput] = useState("");
   const [items, setItems] = useState([]);
   const [index, setIndex] = useState(null);

   const inputRef = useRef();

   const storeTasks = () => {
     if (index !== null) {
        setItems(items.map((data, id) => (id === index ? input : data)));
        setIndex(null);
     } else {
        setItems([...items, input]);
     }
      setInput("");
   };

   const deleteTask = (key) => { 
      setItems(items.filter((data, index) => index !== key));
   };

   const editTask = (key) => {
      inputRef.current.focus();
      setInput(items[key]);
      setIndex(key);
   };

   return (
      <section className="container">
         <div className="head-sec">
            <h2>Mark The Tasks</h2>
            <TaskInput input={input} setInput={setInput} inputRef={inputRef} storeTasks={storeTasks} />
         </div>
         <div className="task-col">
            {items.map((item, index) => (
               <TaskTile index={index} item={item} editTask={editTask} deleteTask={deleteTask} />
            ))}
         </div>
      </section>
   );
};

export default App;
