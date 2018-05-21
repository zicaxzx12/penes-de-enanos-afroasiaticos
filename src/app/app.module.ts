import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientPerfilComponent } from './client-perfil/client-perfil.component';
import { DatesTomorrowComponent } from './dates-tomorrow/dates-tomorrow.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NewDateComponent } from './new-date/new-date.component';
import { ClientHistoryComponent } from './client-history/client-history.component';
import { ClientPayComponent } from './client-pay/client-pay.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    ClientPerfilComponent,
    DatesTomorrowComponent,
    NewClientComponent,
    NewDateComponent,
    ClientHistoryComponent,
    ClientPayComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
