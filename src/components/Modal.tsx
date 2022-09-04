import { useRef } from "react";
import "./Modal.css";
import SubTaskList from "./SubTaskList";

interface Props {
  //a function used to change whether to open the modal or not. it will be triggered when users click on close button in the modal
  setOpenModal: (mode: boolean) => void;
  title: string;
  id: string;
  //a function triggered when users change task title inside the modal
  changeTodos: (newTitle: string, id: string) => void;
  //a todo object's subTasks, it wil be displayed in the modal
  subTasks: string[];
  //a function used to add more subtasks to a todo object
  addSubTask: (taskName: string, id: string) => void;
}



const Modal = (props: Props) => {
  
  //create a ref to the user input so that we can get what the users have inputed 
  const newTitle = useRef<HTMLInputElement>(null);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Change the Name of Your Task</h1>
        </div>
        <div className="body">
          <input type="text" placeholder={props.title} ref={newTitle} />
          <div className="sub-tasks">
            <h3>Sub Tasks</h3>
            <SubTaskList
              subTasks={props.subTasks}
              addSubTasks={props.addSubTask}
              id={props.id}
            ></SubTaskList>
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              //when clicking on confirm button, it will first check whether users have given the task a new name
              //and if so, call changeTodos with the todo object's id to change the task's title
              //After that, call setOpenModal with false to close the modaal
              let enteredName = newTitle.current!.value.trim();
              let name = enteredName === "" ? props.title : enteredName;

              props.changeTodos(name, props.id);
              props.setOpenModal(false);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
