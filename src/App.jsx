import React, { useRef, useState } from "react";
import TaskInput from "./components/TaskInput";

const App = () => {
   const [input, setInput] = useState("");
   const [items, setItems] = useState([]);

   const inputRef = useRef();

   const storeTasks = () => {
      setItems([...items, input]);
      setInput("");
   };
   return (
      <section className="container">
         <div className="head-sec">
            <h2>Mark The Tasks</h2>
            <TaskInput input={input} setInput={setInput} inputRef={inputRef} storeTasks={storeTasks} />
         </div>
      </section>
   );
};

export default App;
