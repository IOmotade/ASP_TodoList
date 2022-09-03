import { useRef } from "react";
import "./Modal.css";
import SubTaskList from "./SubTaskList";

interface Props {
  setOpenModal: (mode: boolean) => void;
  title: string;
  id: string;
  changeTodos: (newTitle: string, id: string) => void;
  subTasks: string[];
  addSubTask: (taskName: string, id: string) => void;
}

// const Modal=(props:Props)=>{
//     return <div>I am modal  title:{props.title}
//         <button onClick={()=>{props.setOpenModal(false)}}></button>
//     </div>
// }

const Modal = (props: Props) => {
  const newTitle = useRef<HTMLInputElement>(null);
  console.log(newTitle.current);
  // useEffect(()=>{

  // })

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
