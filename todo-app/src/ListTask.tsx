import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Task from "./Task";

const ListTask: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [filter, setFilter] = useState<string>("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.isDone;
    if (filter === "not-done") return !todo.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")}>Toutes</button>
        <button onClick={() => setFilter("done")}>Faites</button>
        <button onClick={() => setFilter("not-done")}>Non faites</button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <Task key={todo.id} task={todo} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
