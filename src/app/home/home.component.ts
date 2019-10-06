import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }



  onNumIncreased(num){
    this.counter = num;
    this.secondPower = num * num
    this.thirdPower = num * num * num
    this.fourthPower = num * num * num * num

  }




}
