import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { TodoItemService} from '../todo-service.service';
import { Items } from '../items.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  providers: [ TodoItemService ]
})
export class TodoItemComponent implements OnInit {
  @Input() ItemList: Items;
  urgent: boolean;
  days:boolean;
  week: boolean;
  itemservice: TodoItemService

  constructor( itemservice: TodoItemService) {
    this.itemservice = itemservice;
  }

  ChangeState(dueDate: string): void{
    [this.urgent, this.days, this.week] = this.itemservice.Update(dueDate);
  }


  ngOnInit() {
  
  }

}

