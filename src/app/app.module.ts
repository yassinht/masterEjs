import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { AppComponent } from './app.component';
// import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
