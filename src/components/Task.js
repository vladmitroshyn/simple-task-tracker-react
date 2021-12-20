import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          className="task__remove-task"
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>
        {task.day}, {task.time}
      </p>
    </div>
  );
};

export default Task;
