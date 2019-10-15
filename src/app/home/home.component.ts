import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { CounterService } from '../Services/counter.service';
import { interval } from 'rxjs';
import { ObservableService } from '../Services/observable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public titleMessage = 'This is the Title Message';xz
  obsActivated;

  counter: number = this.counterService.counter
  secondPower: number = null;
  thirdPower: number = null
  fourthPower: number = null
  currentDate: Date = new Date();
  constructor(private loggingService: LoggingService, private counterService: CounterService, private observableService: ObservableService) { }

  ngOnInit() {
    this.observableService.activatedEmitter.subscribe(activated=> {
      this.obsActivated=activated
      console.log(this.obsActivated);
    })
    console.log(this.obsActivated);
    this.counterService.numberIncreased.subscribe(num => this.onNumIncreased(num))
    this.loggingService.logStatusChange('status logged')
    this.loggingService.logServiceStatus()
    setInterval(() => this.loggingService.logServiceStatus(), 3000)

    interval(1000).subscribe(date=>{

    })

  }



  onNumIncreased(num) {
    this.counter = num;
    this.secondPower = num * num
    this.thirdPower = num * num * num
    this.fourthPower = num * num * num * num

  }

}
