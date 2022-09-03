import React from "react";
import "./ListItem.css";
import "./Modal"

//This Interface defines properties passed to component ListItem
interface Props {
  id: string;
  title: string;
  isDone: boolean;
  addedTime: string;
  priorityLevel: string;
  //Called in HandleChange when the check box of a task has been clicked
  checkTodo: (id: string, isDone: boolean) => void;
  //Called in handleClick when user click on delete bottom next to a task
  deleteTodo: (id: string) => void;

  openModalAndSetTitleId:(title:string,id:string)=>void

}


function ListItem(props: Props): React.ReactElement {
  //Triggered when the check box of a task has been clicked
  //The function calls the checkTodo function in App component
  //with the id of the task and the boolean value that represent whether the check box is marked
  //to update the boolean value of the task clicked in the Todo List
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.checkTodo(props.id, event.target.checked);
  };

  //Triggered when the user click on delete bottom next to a task
  //The function first pops a window asking whether the user really wants to delete the task
  //And if the user click ok, it would call deleteTodo function in App component
  //with the id of that task to remove the task from the Todo List
  const handleClick = (e:React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    props.deleteTodo(props.id);
  };

  const { title, isDone, addedTime, priorityLevel } = props;
  return (
    <li className={`level-${priorityLevel}`} onClick={()=>{
      console.log("clicked")
      props.openModalAndSetTitleId(props.title, props.id)}}>
      <label>
        <input type="checkbox" checked={isDone} onChange={handleChange} onClick={(e)=>{e.stopPropagation()}}/>
        <span><b>{` ${title} `}</b></span><span><i>{`| ${addedTime}`}</i></span>
        
      </label>
      <button className="btn btn-danger" onClick={handleClick}>X</button>
    </li>
  );
}

export default ListItem;