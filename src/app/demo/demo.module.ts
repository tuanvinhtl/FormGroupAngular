import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TdFormComponent } from './td-form/td-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DemoComponent } from './demo.component';
import { FormVinhComponent } from './form-vinh/form-vinh.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    SharedModule
  ],
  declarations: [
    TdFormComponent,
    ReactiveFormComponent,
    DemoComponent,
    FormVinhComponent
  ]
})
export class DemoModule { }
