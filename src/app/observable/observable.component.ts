import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    interval(1000).subscribe(count=>{
      console.log(count);
    })
  }
}
