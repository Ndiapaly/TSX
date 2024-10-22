import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo } from "./store";

export interface Todo {
  id: number;
  description: string;
  isDone: boolean;
}

interface TaskProps {
  task: Todo;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(task.id));
  };

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDescription = e.target.value;
    dispatch(
      updateTodo({
        id: task.id,
        description: newDescription,
      })
    );
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
        title="Toggle task completion"
      />
      <input
        type="text"
        value={task.description}
        onChange={handleUpdate}
        placeholder="Update task description"
      />
    </div>
  );
};

export default Task;
