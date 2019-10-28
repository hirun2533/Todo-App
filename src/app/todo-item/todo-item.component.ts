import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { TodoItemService} from '../todo-service.service';
import { Items } from '../items.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],

})
export class TodoItemComponent implements OnInit {
  @Input() ItemList: Items;
  urgent: boolean;
  days:boolean;
  week: boolean;
  taskList: Items[];

  constructor(public itemservice: TodoItemService) {
    this.itemservice = itemservice;
  }

  ChangeState(dueDate: string): void{
    [this.urgent, this.days, this.week] = this.itemservice.Update(dueDate);
  }


  
  deleteTask(items: string) : void{
    console.log(items);
    this.taskList = this.itemservice.delete(items);
  }
  
  ngOnInit() {
  
  }
}

