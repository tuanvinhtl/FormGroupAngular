import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { unqueValidate } from 'src/app/shared/vinh-validate.directive';
import { UserService } from 'src/app/shared/user.service';
import { ComparePasswordValidate } from 'src/app/shared/compare-password.directive';

@Component({
  selector: 'app-form-vinh',
  templateUrl: './form-vinh.component.html',
  styleUrls: ['./form-vinh.component.css']
})
export class FormVinhComponent implements OnInit {

  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required, unqueValidate(this.userService)],
      email: [],
      emailConfirm: [],
      password: ['', [Validators.required], null],
      passwordConfirm: ['', [Validators.required, ComparePasswordValidate('password')], null]
    });
    console.log(this.myForm)
  }


  get username() {
    return this.myForm.get('username');
  }

  get email() {
    return this.myForm.get('email');
  }

  get emailConfirm() {
    return this.myForm.get('emailConfirm');
  }

  get password() {
    return this.myForm.get('password');
  }

  get pwConfirm() {
    return this.myForm.get('passwordConfirm');
  }


}
