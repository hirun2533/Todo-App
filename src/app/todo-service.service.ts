import { Injectable } from '@angular/core';
import { Items } from './items.model';


@Injectable({
  providedIn: 'root'
})

export class TodoItemService {

  dueDate: string;
  urgent: boolean; 
  days:boolean;
  week: boolean;
  remove: boolean;
  tasks: Items[];
  taskList: string;

  constructor() { 
    this.urgent = false; 
    this.days = false; 
    this.week = false; 
    this.remove = false;

  }

  createTask(){
    this.tasks = [   
      new Items ("Book Airline Tickets", "urgent"),
      new Items ("Call Dad", "days"),
      new Items ("Pick up prescription", "urgent"),
      new Items ("Submit assignment", "week")
    ];
  }
  
  getTask(): Items[]{
   return this.tasks;
  
  }
 
  delete(items: string): Items[] {
    console.log("service: ", items);

    this.tasks = this.getTask();
    console.log(this.tasks);

    for(var i = 0; i < this.tasks.length; i++){
      if(items == this.tasks[i].todoList){
        this.tasks.splice(i,1);
      }
    }
    return this.tasks;
  }
    Update(Choice?: string): [boolean,boolean,boolean, boolean] {
    this.tasks = this.getTask();
    this.dueDate = Choice;
    if (this.dueDate == "urgent") {
      this.urgent = true;
      this.week = false;
      this.days = false;
      
    }
    else if (this.dueDate == "days") {
      this.days = true;
      this.week = false;
      this.urgent = false;
      
    }
    else if (this.dueDate == "week")  {
      this.week = true;
      this.days = false;
      this.urgent = false;
      
    }

     return [this.urgent, this.days, this.week, this.remove];
  }

  addTask(text?:string, dueDate?: string ): Items[]{
  
    this.tasks = this.getTask();
    console.log(this.tasks);
    
    const Newitems = new Items(text,dueDate);
    this.tasks.push(Newitems);
    return this.tasks;
    
  }

 

    
}
  

