import React, { Component } from "react";
import "./ListItem.css";

//This Interface defines properties passed to component ListItem
interface Props {
  id: string;
  title: string;
  isDone: boolean;
  addedTime: string;
  priorityLevel:string;
  //Called in HandleChange when the check box of a task has been clicked
  checkTodo: (id: string, isDone: boolean) => void;
  //Called in handleClick when user click on delete bottom next to a task
  deleteTodo: (id: string) => void;
}

class ListItem extends Component<Props> {
  //Triggered when the check box of a task has been clicked
  //The function calls the checkTodo function in App component
  //with the id of the task and the boolean value that represent whether the check box is marked
  //to update the boolean value of the task clicked in the Todo List
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.checkTodo(this.props.id, event.target.checked);
  };

  //Triggered when the user click on delete bottom next to a task
  //The function first pops a window asking whether the user really wants to delete the task
  //And if the user click ok, it would call deleteTodo function in App component
  //with the id of that task to remove the task from the Todo List
  handleClick = () => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    this.props.deleteTodo(this.props.id);
  };

  render() {
    const { title, isDone, addedTime, priorityLevel } = this.props;
    return (
      <li className={`level-${priorityLevel}`}>
        <label>
          <input
            type="checkbox"
            checked={isDone}
            onChange={this.handleChange}
          />
          <span>{` ${title} | ${addedTime}`}</span>
        </label>
        <button className="btn btn-danger" onClick={this.handleClick}>X</button>
      </li>
    );
  }
}

export default ListItem;
