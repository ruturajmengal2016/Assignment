import React, { useState } from "react";
import { addTodo, removeTask, complete } from "./redux/todoReducer";
import { useDispatch, useSelector } from "react-redux";
import Style from "./App.module.scss";
const App = () => {
  const [task, setTask] = useState({ task: "", complete: false });
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todo.value.task);
  return (
    <div className={Style.root}>
      <h1>React-Redux Todo App</h1>
      <div className={Style.box}>
        <div>
          <input
            placeholder="Add task..."
            name="task"
            type="text"
            value={task.task}
            onChange={(e) => {
              setTask({ ...task, task: e.target.value });
            }}
          />
          &nbsp;
          <button
            onClick={() => {
              dispatch(addTodo({ task: task.task }));
              setTask({ task: "" });
            }}
          >
            Add
          </button>
        </div>
        <div className={Style.list}>
          {selector.map((ele, ind) => {
            return (
              <div key={ind} className={Style.task}>
                <span
                  style={{
                    textDecoration: selector[ind].complete
                      ? "line-through"
                      : "none",
                  }}
                >
                  {ele.task}
                </span>
                <button
                  onClick={() => {
                    dispatch(removeTask({ task: ind }));
                  }}
                >
                  ❌
                </button>
                <button
                  onClick={() => {
                    dispatch(
                      complete({
                        task: ind,
                        complete: true,
                      })
                    );
                  }}
                >
                  👍
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
