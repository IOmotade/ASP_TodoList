import { useState } from "react";
import TaskBar from "./components/TaskBar";
import List from "./components/List";
import Bottom from "./components/Bottom";
import SortOptions from "./components/SortOptions";
import "./App.css";
import Modal from "./components/Modal";
import SearchBar from "./components/SearchBar";

const App = () => {
  //An array that stores all todo tasks
  const [todos, setTodos] = useState<Array<TodoObJ>>([]);
  //A boolean used to check whether to open the modal or not
  const [openModal, setOpenModal] = useState<boolean>(false);
  //A string used in modal to show the task name
  const [modalItemTitle, setModalItemTitle] = useState<string>("");
  //An ID used in modal to identify which task that the modal will need to display 
  const [modalItemId, setModalItemId] = useState<string>("");
  //A string to record what the user has input
  const [userInput, setUserInput] = useState("");

  //Open and modal and set the modal title and item id to correct display the task in the modal
  const openModalAndSetTitle = (title: string, id: string) => {
    setModalItemTitle(title);
    setOpenModal(true);
    setModalItemId(id);
  };

  //Add sub tasks to a todo object
  //First retrieve the task with the id, then add task name to its subTask
  //then update the todos
  const addSubTask = (taskName:string,id:string)=>{
    const newTodos = [...todos];
    const target = newTodos.find((todo) => todo.id === id);
    target!.subTasks.push(taskName)
    setTodos(newTodos);

  }

  //get the subtasks of a todo object with id
  //If it cannot find the task with the id, it will return an empty array
  const getSubTasks = (id:string)=>{
    const target = todos.find((todo) => todo.id === id)!;
    if(!target){
      return []
    }
    return target.subTasks
  }

  //used to change the title of a task 
  //First reetrieve the task with the id, update its title to newTitle
  //then update the todos
  const changeTitle = (newTitle: string, id: string) => {
    const newTodos = [...todos];
    const target = newTodos.find((todo) => todo.id === id);
    target!.title = newTitle;
    setTodos(newTodos);
  };

  //Added task to the todo array
  //When called, it would add the new TodoObj to the a copy of todos array
  //then call setState with the new array to re-render the page
  const addTodo = (todoObj: TodoObJ) => {
    const newTodos: Array<TodoObJ> = [todoObj, ...todos];
    setTodos(newTodos);
  };

  //Modified the isDone boolean value of a TodoObj in todo array
  //When called, it would iterate through all TodoObj in the todo array
  //and if the current TodoObj has the same ID as the argument ID
  //it would make a copy of that TodoObj and set its isDone value to the argument isDone
  //But if the id is not the same, it would simpy return that TodoObj
  //After the iteration, an new array storing the old TodoObjs and modified TodoObj is created
  //then it would call setState with the new array to re-render the page
  const checkTodo = (id: string, isDone: boolean) => {
    const newTodos: Array<TodoObJ> = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, isDone: isDone };
      else return todoObj;
    });
    setTodos(newTodos);
  };

  //Remove a TodoObj from todos Array
  //When called, it would first make a copy of the original todos array
  //then it would iterate through the copy, checking if the id is the same as argument id
  //If the id is not the same as argument id, it would remove that TodoObj from the copy array
  //then it would call setState with the new array to re-render the page
  const deleteTodo = (id: string) => {
    const newTodos: Array<TodoObJ> = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    
  };

  //Set all isDone value of TodoObjs in todos array to argument isDone
  //When called, it would first make a copy of the original todos array
  //then it would iterate through the copy, setting each isDone of each TodoObj to argument isDone
  //then it would call setState with the new array to re-render the page
  const checkAllTodo = (isDone: boolean) => {
    const newTodos: Array<TodoObJ> = todos.map((todo) => {
      return { ...todo, isDone };
    });
    setTodos(newTodos);
  };

  //   //remove the TodoObjs from todo array if their isDone field is true
  //   //When called, it would first make a copy of the original todos array
  //   //then it would iterate through the copy, checking the isDone value of each TodoObj
  //   //and remove the current TodoObj if its isDone value is true
  //   //then it would call setState with the new array to re-render the page

  const clearAllTodoDone = () => {
    const newTodos: Array<TodoObJ> = todos.filter((todo) => !todo.isDone);
    setTodos(newTodos);
  };

  //Sort todos array
  //First, it will make a copy of the todos array
  //then sort it arrcoding to the option arguments
  //Finally, it will update the todos array with the sorted array
  const sortTodo = (option: string) => {
    const newTodos = [...todos];
    switch (option) {
      case "Name":
        newTodos.sort((a: TodoObJ, b: TodoObJ) => {
          return a.title.localeCompare(b.title);
        });
        break;
      case "Date":
        newTodos.sort((a: TodoObJ, b: TodoObJ) => {
          return Date.parse(a.addedTime) - Date.parse(b.addedTime);
        });
        break;
      case "Priority Level":
        newTodos.sort((a: TodoObJ, b: TodoObJ) => {
          return a.priorityLevel.localeCompare(b.priorityLevel);
        });
        break;
      default:
        break;
    }
    setTodos(newTodos);
  };

  //update userInput with input argument
  const changeUserInput = (input: string) => {
    setUserInput(input);
  };



  return (
    <div>
      <SearchBar setUserInput={changeUserInput}></SearchBar>
      <div className="todo-container">
        <div className="todo-wrap">
          <div className="todo-add">
            <TaskBar addTodo={addTodo}/>
          </div>
          <hr/>
          <div className="todo-sort">
            <SortOptions
              options={["Name", "Date", "Priority Level"]}
              sortTodo={sortTodo}
            ></SortOptions>
          </div>
          <List
            todos={todos}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            openModalAndSetTitleId={openModalAndSetTitle}
            filter={userInput}
          />
          <Bottom
            todos={todos}
            checkAllTodo={checkAllTodo}
            clearAllTodoDone={clearAllTodoDone}
          />
        </div>
      </div>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          title={modalItemTitle}
          id={modalItemId}
          changeTodos={changeTitle}
          subTasks={getSubTasks(modalItemId)}
          addSubTask={addSubTask}
        ></Modal>
      )}
     
    </div>
  );
  
};

export default App;
