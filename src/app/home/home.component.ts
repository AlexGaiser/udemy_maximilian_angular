import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { CounterService } from '../Services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  counter: number = 0
  secondPower: number= null;
  thirdPower: number = null
  fourthPower: number = null
  constructor(private loggingService: LoggingService, private counterService: CounterService) { }

  ngOnInit() {
    this.counterService.numberIncreased.subscribe(num=>this.onNumIncreased(num))
    this.loggingService.logStatusChange('status logged')
    this.loggingService.logServiceStatus()
    setInterval(()=>this.loggingService.logServiceStatus(), 3000)
  }



  onNumIncreased(num){
    this.counter = num;
    this.secondPower = num * num
    this.thirdPower = num * num * num
    this.fourthPower = num * num * num * num

  }




}
