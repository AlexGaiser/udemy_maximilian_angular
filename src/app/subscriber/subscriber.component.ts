import { Component, OnInit } from '@angular/core';
import { CounterService } from '../Services/counter.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {
  counterArray: number[] = []
  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counterService.numberIncreased.subscribe(num=>this.pushToArray(this.counterArray, num))
  }

  pushToArray(array: any[], value) {
    array.push(value)
  }
}
