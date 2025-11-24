import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/actions/todoActions";

export default function Todo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.tasks);

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTask(text));
    setText("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>To-Do Application</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleAdd} style={{ marginLeft: 10 }}>
        Add
      </button>

      <ul style={{ marginTop: 20 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: 10 }}>
            {task.text}
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              style={{
                marginLeft: 10,
                color: "white",
                background: "red",
                border: "none",
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
