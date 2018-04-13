import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FinishedPage } from '../pages/finished/finished';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddPage } from '../pages/add/add';
import { ViewPage } from '../pages/view/view';

//Services
import { ListsService } from '../services/lists.service';

//Pipes
import { CheckStatusListPipe } from '../pipes/checkstatuslist.pipe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FinishedPage,
    HomePage,
    TabsPage,
    AddPage,
    ViewPage,
    CheckStatusListPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FinishedPage,
    HomePage,
    TabsPage,
    AddPage,
    ViewPage
  ],
  providers: [
    ListsService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
