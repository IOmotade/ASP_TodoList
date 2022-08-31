import React, { Component } from "react";
import TaskBar from "./components/TaskBar";
import List from "./components/List";
import Bottom from "./components/Bottom";
import SortOptions from "./components/SortOptions";
import "./App.css";

//This Interface defines the states that App component will maintain
interface States {
  //An array of todo tasks that will be modified and updated based on user's actions
  todos: Array<TodoObJ>;
}

class App extends Component<any, States> {
  //In constructor, initialize the todos to an empty array
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  //Added task to the todo array
  //When called, it would add the new TodoObj to the a copy of todos array
  //then call setState with the new array to re-render the page
  addTodo = (todoObj: TodoObJ) => {
    const { todos } = this.state;
    const newTodos: Array<TodoObJ> = [todoObj, ...todos];
    this.setState({
      todos: newTodos,
    });
  };
  //Modified the isDone boolean value of a TodoObj in todo array
  //When called, it would iterate through all TodoObj in the todo array
  //and if the current TodoObj has the same ID as the argument ID
  //it would make a copy of that TodoObj and set its isDone value to the argument isDone
  //But if the id is not the same, it would simpy return that TodoObj
  //After the iteration, an new array storing the old TodoObjs and modified TodoObj is created
  //then it would call setState with the new array to re-render the page
  checkTodo = (id: string, isDone: boolean) => {
    const { todos } = this.state;
    const newTodos: Array<TodoObJ> = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, isDone: isDone };
      else return todoObj;
    });
    this.setState({
      todos: newTodos,
    });
  };

  //Remove a TodoObj from todos Array
  //When called, it would first make a copy of the original todos array
  //then it would iterate through the copy, checking if the id is the same as argument id
  //If the id is not the same as argument id, it would remove that TodoObj from the copy array
  //then it would call setState with the new array to re-render the page
  deleteTodo = (id: string) => {
    const { todos } = this.state;
    const newTodos: Array<TodoObJ> = todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos,
    });
  };

  //Set all isDone value of TodoObjs in todos array to argument isDone
  //When called, it would first make a copy of the original todos array
  //then it would iterate through the copy, setting each isDone of each TodoObj to argument isDone
  //then it would call setState with the new array to re-render the page
  checkAllTodo = (isDone: boolean) => {
    const { todos } = this.state;
    const newTodos: Array<TodoObJ> = todos.map((todo) => {
      return { ...todo, isDone };
    });
    this.setState({ todos: newTodos });
  };

  //remove the TodoObjs from todo array if their isDone field is true
  //When called, it would first make a copy of the original todos array
  //then it would iterate through the copy, checking the isDone value of each TodoObj
  //and remove the current TodoObj if its isDone value is true
  //then it would call setState with the new array to re-render the page

  clearAllTodoDone = () => {
    const { todos } = this.state;
    const newTodos: Array<TodoObJ> = todos.filter((todo) => !todo.isDone);
    this.setState({ todos: newTodos });
  };

  sortTodo = (option: string) => {
    const newTodos = [...this.state.todos];
    switch (option) {
      case "date":
        newTodos.sort((a: TodoObJ, b: TodoObJ) => {
          return Date.parse(a.addedTime) - Date.parse(b.addedTime);
        });
        break;
      case "name":
        newTodos.sort((a: TodoObJ, b: TodoObJ) => {
          return a.title.localeCompare(b.title);
        });
        break;
      case 'priority level':
        newTodos.sort((a: TodoObJ, b: TodoObJ) => {
          return a.priorityLevel.localeCompare(b.priorityLevel);
        });
        break;
      default:
        break;
    }
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <div className="todo-add">
            <TaskBar addTodo={this.addTodo} />
          </div>
          <hr/>
          <div className="todo-search">
            <SortOptions
              options={["name", "date", "priority level"]}
              sortTodo={this.sortTodo}
            ></SortOptions>
          </div>
          <List
            todos={todos}
            checkTodo={this.checkTodo}
            deleteTodo={this.deleteTodo}
          />
          <Bottom
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            clearAllTodoDone={this.clearAllTodoDone}
          />
        </div>
      </div>
    );
  }
}

export default App;
