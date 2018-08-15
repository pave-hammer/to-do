import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListDataApiService {

  constructor() { }

  tasks = [];
  completedTasks = [];

}
