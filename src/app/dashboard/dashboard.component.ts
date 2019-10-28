import { Component, OnInit } from '@angular/core';
import { TodoItemService} from '../todo-service.service';
import { Items} from '../items.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
 MyList: Items[];


 constructor(public itemservice: TodoItemService,) {

   itemservice.createTask();
   this.MyList = itemservice.getTask();
   
  
 }
 
 
  ArrayItems(): Items[] {
    this.MyList = this.itemservice.getTask();
   return this.MyList;
  }
  
    ngOnInit() {
    }
}
