import React, { FunctionComponent, useState } from 'react';

export type ToDo = {
  task: string;
  status: string;
};


type OwnProps = {
  toDos: ToDo[];
  updateToDo: (taskId: string, newStatus: string) => void;
}



const ToDoList: FunctionComponent<OwnProps> = ({ toDos, updateToDo }) => {

    const [ clickCount, setClickCount ] = useState<number>(0);

    function handleClick(toDo: ToDo) {
      setClickCount(clickCount + 1);
      updateToDo(toDo.task, 'done');
    }

    return (
      <div>
        ToDo List: clickCount - {clickCount}
        {toDos.map((toDo) => {
          return (
            <div onClick={(e) => handleClick(toDo)}>
              <span>{toDo.status}</span> - <span>{toDo.task}</span>
            </div>
          );
        })}
      </div>
)

}


export default ToDoList;
