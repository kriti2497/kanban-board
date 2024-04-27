/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface ControlProps {
  inputTaskName: string;
  setInputTaskName: (arg: string) => void;
  submitTaskHandler: () => void;
  selectedTask: any;
  moveForwardBackwards: (argType: string) => void;
  deleteTask: () => void;
}

const Controls: React.FC<ControlProps> = ({
  inputTaskName,
  setInputTaskName,
  submitTaskHandler,
  selectedTask,
  moveForwardBackwards,
  deleteTask,
}) => {
  return (
    <div className="w-full bg-blue-300 px-5 py-6">
      <div className="flex gap-5 items-center w-1/2">
        <input
          className="border border-black px-2 py-1 rounded-sm w-full"
          type="text"
          placeholder="New task name"
          value={inputTaskName}
          onChange={(e: any) => setInputTaskName(e.target.value)}
        />
        <button
          className="border rounded-md text-white bg-blue-950 py-1 px-3"
          onClick={() => {
            submitTaskHandler();
            setInputTaskName("");
          }}
        >
          Create
        </button>
      </div>
      <div className="flex w-2/3 gap-2 mt-4 items-center">
        <input
          className="border border-black px-2 py-1 rounded-sm w-full"
          type="text"
          placeholder="Selected task"
          value={selectedTask ? selectedTask.name : ""}
          readOnly
        />
        <button
          className="border rounded-md text-white bg-blue-950 py-1 px-3"
          onClick={() => moveForwardBackwards("fwd")}
        >
          Forward
        </button>
        <button
          className="border rounded-md text-white bg-blue-950 py-1 px-3"
          onClick={() => moveForwardBackwards("bck")}
        >
          Backward
        </button>
        <button
          className="border rounded-md text-white bg-blue-950 py-1 px-3"
          onClick={deleteTask}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Controls;
