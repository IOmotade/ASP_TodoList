import { useState } from "react";
import "./SubTaskList.css"
interface Props {
  subTasks: string[];
  id: string;
  addSubTasks: (taskName: string, id: string) => void;
}

const SubTaskList = (props: Props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const onTaskNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value.trim().toLowerCase();
    console.log(input);
    setEnteredTask(input);
  };

  const onButtonClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.addSubTasks(enteredTask, props.id);
  };

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
