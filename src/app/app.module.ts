import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { FormsModule } from '@angular/forms';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }