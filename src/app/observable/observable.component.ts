import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import {map, filter} from 'rxjs/operators'
import { ObservableService } from '../Services/observable.service';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})

export class ObservableComponent implements OnInit {
  private firstObsSubscription: Subscription;

  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count=>{
    //     console.log(count);

    // })

    const customIntervalObservable = Observable.create((observer)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(count++)
        if(count > 3) {
          observer.error('count greater than 3')
        }
        if(count==2) {
          observer.complete()
        }
      }, 1000)
    })

    this.firstObsSubscription = customIntervalObservable.pipe(
      filter((data: number)=>{
        return  data > 0
      }),
      map((data: number) =>{
      return 'Round ' + (data + 1)
    })
    )
.subscribe(data=>{

      console.log(data)

    },
    error=> {
      console.log(error);
      alert(error)
    },
    // on complete
    ()=>{
      console.log('count equals 2, observer completed');
    }


    )


  }

  onActivate() {
    this.observableService.activatedEmitter.emit(true)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.firstObsSubscription.unsubscribe();
  }
}
