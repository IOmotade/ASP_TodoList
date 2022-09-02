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

  openModalAndSetTitleId: (title: string, id: string) => void;

  filter: string;
}

const List = (props: Props): React.ReactElement => {
  const getListItems = () => {
    console.log(props.filter)
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