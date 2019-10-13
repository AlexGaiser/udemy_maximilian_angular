import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatCheckboxModule,
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { BasicHighlightDirectiveDirective } from './basic-highlight-directive.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { LoggingService } from './logging.service';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { OddDetailComponent } from './odd-detail/odd-detail.component';
import { EvenDetailComponent } from './even-detail/even-detail.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventEmitterComponent,
    BasicHighlightDirectiveDirective,
    BetterHighlightDirective,
    SubscriberComponent,
    OddDetailComponent,
    EvenDetailComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatCheckboxModule
  ],
  providers: [
    LoggingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
