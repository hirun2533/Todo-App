export class Items {
    todoList: string;
    dueDate: string;
    
   constructor(todoList?: string, dueDate?:string) {
         this.todoList = todoList;
         this.dueDate = dueDate;
      
      }
  }