import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareValidatorDirective } from './compare-validator.directive';
import { UniqueEmailValidatorDirective } from './unique-email-validator.directive';
import { UniqueUsernameValidatorDirective } from './unique-username-validator.directive';
import { VinhValidateDirective } from './vinh-validate.directive';
import { ComparePasswordDirective } from './compare-password.directive';

@NgModule({
  imports: [],
  declarations: [
    CompareValidatorDirective,
    UniqueEmailValidatorDirective,
    UniqueUsernameValidatorDirective,
    VinhValidateDirective,
    ComparePasswordDirective
  ],
  exports: [
    CommonModule,
    CompareValidatorDirective,
    UniqueEmailValidatorDirective,
    UniqueUsernameValidatorDirective,
    VinhValidateDirective,
    ComparePasswordDirective
  ]
})
export class SharedModule { }
