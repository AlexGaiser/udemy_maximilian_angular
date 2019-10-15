import { Injectable, EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  activatedEmitter = new EventEmitter<boolean>()
  constructor() { }
}
