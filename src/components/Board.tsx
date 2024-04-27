/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const Board: React.FC<{
  allTaskArray: any[];
  selectTaskHandler: (arg: string) => void;
}> = ({ allTaskArray, selectTaskHandler }) => {
  const statusMap: any = {
    todo: "Todo",
    inprogress: "In-Progress",
    completed: "Completed",
  };
  return (
    <div className="flex justify-between text-center w-full px-5 py-6">
      {Object.keys(statusMap).map((each: string) => (
        <div key={each}>
          <h4>{statusMap[each]}</h4>
          {allTaskArray.map((task: any) => {
            if (task.status === each) {
              return (
                <div key={task.id} onClick={() => selectTaskHandler(task.id)}>
                  {task.name}
                </div>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
