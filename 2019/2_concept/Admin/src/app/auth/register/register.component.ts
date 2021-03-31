import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    pass: new FormControl('')
  })

  constructor(
    private authService: AuthService
  ) { }

  register() {
    console.log('Register: ', this.registerForm.value)
    this.authService.register(this.registerForm.value).subscribe((result) => {
      console.log('REGISTER RESULT: ', result)
    })
  }

  ngOnInit() {
  }

}
