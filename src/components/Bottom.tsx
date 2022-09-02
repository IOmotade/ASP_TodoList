import React, { Component } from "react";
import "./Bottom.css";

//This Interface defines properties passed to component Bottom
interface Props {
  //An array of todo tasks that will be displayed
  todos: Array<TodoObJ>;
  //Event handler defined in App component that would change the isDone field of all tasks to the opposite
  checkAllTodo: (isDone: boolean) => void;
  //Event handler defined in App component that remove all tasks in the Todo List
  clearAllTodoDone: () => void;
}

// class Bottom extends Component<Props> {
//   //Triggered when users click the check box of the Bottom
//   //it would then checkAllTodo in App componet with the boolean value of the check box
//   handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     this.props.checkAllTodo(event.target.checked);
//   };
//   //Triggered when users click 'Clear Finished Tasks' bottom
//   //it would then checkAllTodo in App componet to remove all tasks that are finished
//   handleClick = () => {
//     this.props.clearAllTodoDone();
//   };

//   render() {
//     const { todos } = this.props;
//     //Iterate all tasks and count the number of finished tasks
//     const doneTasksNum = todos.reduce(
//       (prevTodo, currentTodo) => prevTodo + (currentTodo.isDone ? 1 : 0),
//       0
//     );
//     const totalTasksNum = todos.length;

//     return (
//       <div
//         className="todo-bottom"
//         //if there is there is at least one task, display the Bottom component
//         style={{ display: totalTasksNum ? "block" : "none" }}
//       >
//         <label>
//           <input
//             type="checkbox"
//             //set checked to true if
//             //there is at least one task in the Todo List
//             //and the number of finished task is equal to the number of all tasks
//             checked={totalTasksNum > 0 && doneTasksNum === totalTasksNum  }
//             onChange={this.handleChange}
//           />
//         </label>
//         <span>
//           <span>Finished:{doneTasksNum}</span> / All:{totalTasksNum}
//         </span>
//         <button className="btn btn-danger" onClick={this.handleClick}>
//           Clear Finished Tasks
//         </button>
//       </div>
//     );
//   }
// }

function Bottom(props: Props): React.ReactElement {
  //Triggered when users click the check box of the Bottom
  //it would then checkAllTodo in App componet with the boolean value of the check box
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.checkAllTodo(event.target.checked);
  };
  //Triggered when users click 'Clear Finished Tasks' bottom
  //it would then checkAllTodo in App componet to remove all tasks that are finished
  const handleClick = () => {
    props.clearAllTodoDone();
  };

  const { todos } = props;
  //Iterate all tasks and count the number of finished tasks
  const doneTasksNum = todos.reduce(
    (prevTodo, currentTodo) => prevTodo + (currentTodo.isDone ? 1 : 0),
    0
  );
  const totalTasksNum = todos.length;

  return (
    <div
      className="todo-bottom"
      //if there is there is at least one task, display the Bottom component
      style={{ display: totalTasksNum ? "block" : "none" }}
    >
      <label>
        <input
          type="checkbox"
          //set checked to true if
          //there is at least one task in the Todo List
          //and the number of finished task is equal to the number of all tasks
          checked={totalTasksNum > 0 && doneTasksNum === totalTasksNum}
          onChange={handleChange}
        />
      </label>
      <span>
      <span>Finished <b>{doneTasksNum}</b></span> out of <b>{totalTasksNum}</b>
      </span>
      <button className="btn btn-danger" onClick={handleClick}>
        Clear Completed
      </button>
    </div>
  );
}
export default Bottom;