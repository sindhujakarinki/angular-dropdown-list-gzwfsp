import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Import AutosizeModule
import { AutosizeModule } from 'ngx-autosize';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AutosizeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
