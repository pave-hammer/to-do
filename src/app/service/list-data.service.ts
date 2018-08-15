import { Injectable } from '@angular/core';
import { ListDataApiService } from '../api/list-data-api.service';

@Injectable()

export class DataService {

  constructor(private _list: ListDataApiService) { }

  itemCount: number;
  taskItem: string;
  placeHolder: string = 'Add an item'

  ngOnInit() { }


  addItem() {
    console.log(this.taskItem);
    this._list.tasks.push(this.taskItem);
    this.taskItem = '';
    this.itemCount = this._list.tasks.length;
  }

  removeItem(i) {
    console.log(this.taskItem);
    this._list.completedTasks.push(this.taskItem);
    this._list.tasks.splice(i, 1);
    this.itemCount = this._list.tasks.length;
  }

}
