import { Injectable } from '@angular/core';
import { TaskModel } from '../interfaces/taskModel';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DataService {

  constructor(private _http: HttpClient) { }

  _tasks: Array<TaskModel>;
  itemCount: number;
  taskItem: string;
  placeHolder: string = 'Add an item'

  ngOnInit() { }

  loadTasks() { //GET request
    return this._http.get('api/task');
  }

  addItem() { //New POST request
    var p = this._http.put('api/task', { title: this.taskItem });
    this.taskItem = '';
    return p;
  }

  updateItem(task: TaskModel){ //PUT request
    return this._http.put('api/task', task);
  }

  removeItem(id) { //Delete request
    return this._http.delete(`api/task/${id}`);
  }
  
}
