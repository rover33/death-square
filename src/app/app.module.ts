import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';
import { ExternalDefensesModule } from './external-defenses/external-defenses.module'

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InternalDefensesModule,
    ExternalDefensesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
