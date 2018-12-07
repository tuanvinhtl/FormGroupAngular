import { Directive } from '@angular/core';
import { UserService } from './user.service';
import { NG_ASYNC_VALIDATORS, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function unqueValidate(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.getUserByUsername(control.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'username': true } : null;
      })
    )
  }
}

@Directive({
  selector: '[appVinhValidate]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: VinhValidateDirective, multi: true }]
})


export class VinhValidateDirective {

  constructor(private userService: UserService) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    return unqueValidate(this.userService)(control);
  }
}
