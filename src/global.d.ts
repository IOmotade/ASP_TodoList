//This interface defines the properties of tasks stored in the Todo List

interface TodoObJ {
  //The unique ID a task of the Todo List have
  id: string;
  //The title of the task
  title: string;
  //A boolean value to show whether the task has been finished
  isDone: boolean;
  //The date and time at which the task has been added to the Todo List
  addedTime: string;
  //The priority level of the task
  priorityLevel:string;
  //Array of string that records the subtasks of the task
  subTasks:string[]
}

//The interface that defines the properties used to create a priority level in the application
interface PriorityLevelObj{
  //The level of a priority
  level:number
  //The name of that priority level
  PriorityLevelName:string
}
