import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddClassDirective } from './AddClass.directive';


const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
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
