import { Component, OnInit, Input } from '@angular/core';
import { TodoItemComponent} from '../todo-item/todo-item.component';
import { Items} from '../items.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() itemList: Items[];
  constructor() { 
  }

  ngOnInit() {
  }

}
