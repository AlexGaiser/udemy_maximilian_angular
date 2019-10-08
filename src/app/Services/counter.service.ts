import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

numberIncreased = new EventEmitter<number>();

public counter= 0

constructor() { }

increaseByOne(int: number): number{
  this.counter+= 1;

  this.numberIncreased.emit(this.counter)
  return this.counter;
}

}
