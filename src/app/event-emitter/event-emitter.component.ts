import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { LoggingService } from '../logging.service';
import { CounterService } from '../Services/counter.service';

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

  constructor(private log: LoggingService, private counterService: CounterService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log('onchanges called');
    console.log(changes);
  }


  onClick(num, localReference:HTMLInputElement){

    console.log(this.numInput);
    const outputNum = this.increaseByOne(num);
    console.log(outputNum);
    this.counterService.numberIncreased.emit(outputNum);

    this.log.serviceStatus = "status " + num + 'times clicked'
  }

  increaseByOne(int: number): number{
    return int+= 1;
  }

}
