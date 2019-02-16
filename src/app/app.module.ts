import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Constants} from './constants'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

//Component
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultsComponent } from './results/results.component';

//service
import { CommonService } from './service/common.service';
import { NotificationService } from './service/notification.service';

//Module
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResultsComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule

  ],
  providers: [HttpClientModule,Constants,CommonService,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
