import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../service/list-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('goals', [
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

  btnText: string = 'Add an item';  
  itemCount: number = this._data.itemCount;
  tasks = this._data.tasks;

  constructor(private _data: DataService) { }

  ngOnInit() {
    // this.itemCount = this.goals.length;
  }

  addItem(){ 
    this._data.addItem();
   }

  //  removeItem(){
  //    this._data.removeItem(i);
  //  }   

  // itemCount: number;
  // goalText: string = 'My first life goal';
  // goals = [];

  // addItem() {
  //   this.goals.push(this.goalText);
  //   this.goalText = '';
  //   this.itemCount = this.goals.length;
  // }

  // removeItem(i) {
  //   this.goals.splice(i, 1);
  //   this.itemCount = this.goals.length;
  // }

}
