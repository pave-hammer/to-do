import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../../service/list-data.service';
import { ListDataApiService } from '../../api/list-data-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('this._data.tasks', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  constructor(private _data: DataService, private _list: ListDataApiService) { }

  ngOnInit() { }
   
  get itemCount(): number {
    return this._data.itemCount;
  }
 
  get formValid(): boolean{
    return typeof(this._data.taskItem) !== 'undefined' && this._data.taskItem != null && this._data.taskItem != '';
  }
 
  get tasks(): string[] {
    return this._list.tasks;
  }
  
  addItem(){ 
    this._data.addItem();
  }

  removeItem(i){
    this._data.removeItem(i);
  }

}
