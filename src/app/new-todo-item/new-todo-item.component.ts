import { Component, OnInit, Input } from '@angular/core';
import { TodoItemService} from '../todo-service.service';
import { Items } from '../items.model';
// import { Item } from '../todo-list/todo-list.model';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {

  @Input() ArrayItem: Items[];
  items: Items[];
  


  constructor(public itemservice: TodoItemService ){
    this.itemservice = itemservice;
  }

  addList(item: string) : void {
    this.items = this.itemservice.getTask();
    this.ArrayItem = this.itemservice.addTask(item , "List");
  }
  ngOnInit() {
  }

}
