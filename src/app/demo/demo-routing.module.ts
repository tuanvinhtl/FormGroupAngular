import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TdFormComponent } from './td-form/td-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DemoComponent } from './demo.component';
import { FormVinhComponent } from './form-vinh/form-vinh.component';

const routes: Routes = [
  {
    path: '', component: DemoComponent, children: [
      { path: '', component: TdFormComponent },
      { path: 'reactiveform', component: ReactiveFormComponent },
      { path: 'formvinh', component: FormVinhComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
