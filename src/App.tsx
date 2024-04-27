/* eslint-disable @typescript-eslint/no-explicit-any */
import Board from "./components/Board";
import Controls from "./components/Controls";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [taskName, setTaskName] = useState("");
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [allTasksArray, setAllTasksArray] = useState<any[]>([]);

  const statusList = ["todo", "inprogress", "completed"];

  const submitTaskHandler = () => {
    setAllTasksArray([
      ...allTasksArray,
      {
        id: uuidv4(),
        name: taskName,
        status: statusList[0],
      },
    ]);
  };

  const selectTaskToMove = (taskId: string) => {
    if (taskId) {
      const selectedTaskArr = allTasksArray.filter(
        (each) => each.id === taskId
      );

      console.log(selectedTaskArr);

      setSelectedTask(selectedTaskArr[0]);
    }
  };

  const updationFwdBackward = (type: string) => {
    const updatedTaskItems = allTasksArray.map((item) => {
      if (item.id === selectedTask.id) {
        const getStatusIndex = statusList.indexOf(selectedTask.status);
        console.log(getStatusIndex);
        const getNextStatus =
          type === "fwd"
            ? statusList[getStatusIndex + 1]
            : statusList[getStatusIndex - 1];
        console.log(getNextStatus);
        setSelectedTask({ ...item, status: getNextStatus });
        return { ...item, status: getNextStatus };
      }
      return item;
    });
    setAllTasksArray(updatedTaskItems);
  };

  const moveForwardBackwards = (type: string) => {
    console.log(selectedTask);
    if (
      type === "fwd" &&
      statusList.indexOf(selectedTask.status) < statusList.length - 1
    ) {
      console.log("forward");
      updationFwdBackward(type);
    }
    if (type === "bck" && statusList.indexOf(selectedTask.status) > 0) {
      console.log("backwards");
      updationFwdBackward(type);
    }
  };
  const deleteTask = () => {
    const allElementsAfterDeletion = allTasksArray.filter(
      (each: any) => each.id !== selectedTask.id
    );

    setAllTasksArray(allElementsAfterDeletion);
    setSelectedTask(null);
  };

  return (
    <div>
      <Controls
        inputTaskName={taskName}
        setInputTaskName={setTaskName}
        submitTaskHandler={submitTaskHandler}
        selectedTask={selectedTask}
        moveForwardBackwards={moveForwardBackwards}
        deleteTask={deleteTask}
      />
      <Board
        allTaskArray={allTasksArray}
        selectTaskHandler={selectTaskToMove}
      />
    </div>
  );
}

export default App;
