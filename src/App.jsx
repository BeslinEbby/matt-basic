import React, { useEffect, useRef, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskTile from "./components/TaskTile";

const App = () => {
   const [input, setInput] = useState("");
   const [items, setItems] = useState(localStorage.getItem("tasks") && JSON.parse(localStorage.getItem("tasks")));
   const [index, setIndex] = useState(null);
   const [btnText, setBtnText] = useState("Add");

   const inputRef = useRef();

   const storeTasks = () => {
     if (index !== null) {
        setItems(items.map((data, id) => (id === index ? input : data)));
        setIndex(null);
        setBtnText("Add")
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
      setBtnText("Update")
   };

   useEffect(() => {
         localStorage.setItem("tasks", JSON.stringify(items));
   }, [items]);   

   return (
      <section className="container">
         <div className="head-sec">
            <h2>Mark The Tasks</h2>
            <TaskInput input={input} setInput={setInput} inputRef={inputRef} storeTasks={storeTasks} btnText={btnText} />
         </div>
         <div className="task-col">
            {items?.map((item, index) => (
               <TaskTile index={index} item={item} editTask={editTask} deleteTask={deleteTask} />
            ))}
         </div>
      </section>
   );
};

export default App;
