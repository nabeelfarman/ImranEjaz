import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { PNPrimeModule } from './shared/pnprime/pnprime.module';

import { ToastrModule } from 'ng6-toastr-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './shared/pipe-filters/pipe-search';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    PNPrimeModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
