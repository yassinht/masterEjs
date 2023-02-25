import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';

const appRoutes: Routes = [
  { path: 'multiSelect', component:  MultiSelectComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
