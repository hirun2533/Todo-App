import { Component, OnInit } from '@angular/core';
import { TodoItemService} from '../todo-service.service';
// import { NewTodoItemComponent } from '../new-todo-item/new-todo-item.component';
import { Items} from '../items.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
 MyList: Items[];
 itemservice: TodoItemService

 constructor(itemservice: TodoItemService,) {

   this.itemservice = itemservice;
   
   this.MyList = [   
     new Items ("Book Airline Tickets", "urgent"),
     new Items ("Call Dad", "days"),
     new Items ("Pick up prescription", "urgent"),
     new Items ("Submit assignment", "week")
    ];
  
  
 }
 
 
  ArrayItems(): Items[] {
  
   return this.MyList;
  }
  
    ngOnInit() {
    }
}
