import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Visit grandparents",
      day: "December 20",
      time: "18:00",
      reminder: false,
    },
    {
      id: 2,
      text: "Work Meeting",
      day: "December 21",
      time: "10:00",
      reminder: true,
    },
    {
      id: 3,
      text: "Go to the cinema",
      day: "December 22",
      time: "19:30",
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks yet"
      )}
    </div>
  );
};

export default App;
