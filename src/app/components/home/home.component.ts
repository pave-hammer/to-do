import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/list-data.service';
import { TaskModel } from '../../interfaces/taskModel';

@Component ({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  taskList: Array<TaskModel>;

  constructor(private _data: DataService) { }

  ngOnInit() { 
    this.loadTasks();
  }

  loadTasks() { //GET request
    this._data.loadTasks() //Getting saved to do list
    .subscribe((response: any) => { 
      this.taskList = response;
      this.taskList.forEach(x => { x.edit = false; });
      }, error => console.error(error));
  }

  get itemCount(): number {
    var count = !this.taskList ? 0 : this.taskList.length;
    return count;
  }
  
  addItem() { //New POST request
    this._data.addItem().subscribe((response) => this.loadTasks());
  }

  removeItem(id) { //Delete request
    this._data.removeItem(id).subscribe((response) => this.loadTasks());
  }
  
  editTask(task: TaskModel) { //PUT request
    task.edit = !task.edit;
  }

  updateTask(task: TaskModel) { //PUT request
    task.edit = false;
    this._data.updateItem(task)
      .subscribe((response) => this.loadTasks());
  }

  priority = Array<string>("none", "!", "!!", "!!!");

}
