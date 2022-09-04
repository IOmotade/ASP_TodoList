import { useState } from "react";
import "./SubTaskList.css"
interface Props {
  //subTaks array that will be displayed in the modal
  subTasks: string[];
  //the id of a todo object
  id: string;
  //a function to added more subtasks to a todo object
  addSubTasks: (taskName: string, id: string) => void;
}

const SubTaskList = (props: Props) => {
  //the new subtask name the users have entered
  const [enteredTask, setEnteredTask] = useState("");

  //triggered when users enter anything in the subtask input
  //it will convert the input to lowercase then update enteredTask with the input
  const onTaskNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value.trim().toLowerCase();
    setEnteredTask(input);
  };

  //triggered when users click on "add" button to added new subtask
  //it will call addSubTasks with the task name and the todo object id to update the todo object's subtasks
  const onButtonClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.addSubTasks(enteredTask, props.id);
  };

  //return all suntasks
  const getSubTasks = () => {
    const tasks = props.subTasks.map((task) => {
      return <li key={task}>{task}</li>;
    });

    return tasks
  };

  return (
    <div className="sub-tasks">
      <ol>{getSubTasks()}</ol>
      <input placeholder="Enter a Sub Task" onChange={onTaskNameChange} className="" type="text" />
      <button onClick={onButtonClicked}>Add</button>
    </div>
  );
};

export default SubTaskList;
