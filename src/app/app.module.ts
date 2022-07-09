import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { SuccesAlertComponent } from './succes-alert/succes-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccesAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
