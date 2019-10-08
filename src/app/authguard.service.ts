import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CounterService } from './Services/counter.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate  {

  constructor(private counterService: CounterService)  { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.counterService.counter %2 !== 0;
  }


}
