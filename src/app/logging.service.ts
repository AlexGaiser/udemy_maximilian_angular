import { Injectable } from '@angular/core';



@Injectable()

export class LoggingService {

  public serviceStatus: string = 'Service status changed'

  logStatusChange(status: string) {

    console.log('status: ' +status);
  }

  logServiceStatus(){
    console.log(this.serviceStatus);
  }
}
