import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

numberIncreased = new EventEmitter<number>();


constructor() { }



}
