import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);
  const applyData = useCallback((data) => {
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  }, []);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  useEffect(() => {
    fetchTasks(
      {
        url: "https://react-http-5ac8d-default-rtdb.firebaseio.com/tasks.json",
      },
      applyData
    );
  }, []); // 의존성 배열에 함수를 적용하면 무한 루프에 빠질 수 있음

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} taskText={tasks} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
