import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddClassDirective } from './AddClass.directive';
import { OddDetailComponent } from './odd-detail/odd-detail.component';
import { EvenDetailComponent } from './even-detail/even-detail.component';
import { AuthguardService } from './authguard.service';
import { ObservableComponent } from './observable/observable.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'odd', component: OddDetailComponent, canActivate:[AuthguardService]},
  {path: 'even', component: EvenDetailComponent},
  { path: 'observable', component: ObservableComponent }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      AddClassDirective
   ]
})
export class AppRoutingModule { }
