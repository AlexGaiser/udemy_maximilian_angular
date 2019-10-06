import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.scss']
})



export class EventEmitterComponent implements OnInit {
  @ViewChild('numInput', {static: true}) numInput: ElementRef;

  @Input() emitVariable


  @Output('numInc') numberIncreased = new EventEmitter<number>();

  num: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('onchanges called');
    console.log(changes);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('docheck called');
  }

  onClick(num, localReference:HTMLInputElement){

    console.log(this.numInput);
    const outputNum = this.increaseByOne(num);
    console.log(outputNum);
    this.numberIncreased.emit(outputNum);
  }

  increaseByOne(int: number): number{
    return int+= 1;
  }

}
