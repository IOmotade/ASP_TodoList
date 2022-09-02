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
  priorityLevel:string;
  subTasks:string[]
}


interface PriorityLevelObj{
  level:number
  PriorityLevelName:string
}