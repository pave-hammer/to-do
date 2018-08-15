import { Component, OnInit } from '@angular/core';
import { ListDataApiService } from '../../api/list-data-api.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  constructor(private _list: ListDataApiService) { }

  ngOnInit() { }

  get completedTasks(): string[] {
    return this._list.completedTasks;
  }

  get itemCount(): number {
    return this._list.completedTasks.length;
  }

}
