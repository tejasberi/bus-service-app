import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { BusServiceComponent } from './components/bus-service/bus-service.component';
import { BusTripDetailsComponent } from './components/bus-trip-details/bus-trip-details.component';
import { OnTimeTrackerDirective } from './directives/ontimeTracker.directive';

@NgModule({
  declarations: [
    AppComponent,
    BusServiceComponent,
    BusTripDetailsComponent,
    OnTimeTrackerDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
