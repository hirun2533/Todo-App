import { Component, OnInit, Input } from '@angular/core';
import { TodoItemService} from '../todo-service.service';
import { Items } from '../items.model';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {

  @Input() ArrayItem: Items[];

  constructor(public MyList: TodoItemService ){
    this.MyList = MyList;
  }

  addList(todolist: string) : void {
  this.ArrayItem = this.MyList.addTask(this.ArrayItem, todolist, "List");
  }
  ngOnInit() {
  }

}
