import React from "react";
import ListItem from "./ListItem";
import "./List.css";

//This Interface defines properties passed to component List
interface Props {
  //An array of todo tasks that will be displayed
  todos: Array<TodoObJ>;
  //An event handler passed from App component to ListItem via List
  checkTodo: (id: string, isDone: boolean) => void;
  //An event handler passed from App component to ListItem via List
  deleteTodo: (id: string) => void;
  //A function used to open modal and set modal title. Defined in App and used in ListItem, pass it to List because it is between them
  openModalAndSetTitleId: (title: string, id: string) => void;

  //A string used to find that task that contains a specific string
  filter: string;
}

const List = (props: Props): React.ReactElement => {
  //get all ListItems
  //If the filter is empty, then it will simply return ListItems created by all todo objects
  //Otherwise, it will extract all the todo objects whose titles contain the filter string, then build ListItems by those todo objects
  const getListItems = () => {
    let todos: TodoObJ[];
    if (props.filter === "") {
      todos = props.todos;
    } else {
       todos = props.todos.filter(todo=>todo.title.includes(props.filter))
    }
    const listItems = todos.map((eachTodo) => {
      return (
        <ListItem
          key={eachTodo.id}
          {...eachTodo}
          checkTodo={props.checkTodo}
          deleteTodo={props.deleteTodo}
          openModalAndSetTitleId={props.openModalAndSetTitleId}
        />
      );
    });
    return listItems;
  };

  return <ul className="todo-main">{getListItems()}</ul>;
};

export default List;
