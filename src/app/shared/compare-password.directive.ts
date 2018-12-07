import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function ComparePasswordValidate(valueCompare: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null || control.value.length === 0) {
      return null; // don't validate empty value
    }
    const controlToCompare = control.root.get(valueCompare);
    return controlToCompare && controlToCompare.value !== control.value ? { 'comparePassword': true } : null;
  }
}

@Directive({
  selector: '[appComparePassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ComparePasswordDirective, multi: true }]
})
export class ComparePasswordDirective {

  constructor() { }

}
