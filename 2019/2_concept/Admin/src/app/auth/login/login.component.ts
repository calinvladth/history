import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  })

  constructor(
    private authService: AuthService
  ) { }

  login() {
    console.log('LOGIN: ', this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe((result) => {
      console.log('Login Result', result)
      localStorage.setItem('admin', JSON.stringify(result.data))
    })
  }

  ngOnInit() {
  }

}
