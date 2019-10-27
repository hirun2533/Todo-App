import { Injectable } from '@angular/core';

import { Items } from './items.model';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {
  ArrayItems: Items[]; 
  dueDate: string;
  urgent: boolean; 
  days:boolean;
  week: boolean;
  text:string; 


  constructor() { 
    this.urgent = false; 
    this.days = false; 
    this.week = false; 
    
  }
 
   Update(Choice?: string): [boolean,boolean,boolean] {
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
   
     return [this.urgent, this.days, this.week];
  }

  addTask(ArrayTask?: Items[], text?:string, dueDate?: string ): Items[]{
    var Tasks = new Items(text, dueDate);
    
    this.ArrayItems = ArrayTask;
    this.ArrayItems.push(Tasks);
    return this.ArrayItems;
    
  }
    
}
  

