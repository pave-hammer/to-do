import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }

  itemCount: number;
  taskItem: string;
  tasks = [];
  completedTasks = [];

  ngOnInit() { }

  addItem() {
    this.tasks.push(this.taskItem);
    this.taskItem = '';
    this.itemCount = this.tasks.length;
  }

  removeItem(i) {
    this.completedTasks.push(this.taskItem);
    this.tasks.splice(i, 1);
    this.itemCount = this.tasks.length;
  }

}
