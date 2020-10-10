import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  errorMessage = '';
  constructor(private builder :FormBuilder,
    private router : Router) { 

    }

  ngOnInit() {
      this.loginForm = this.builder.group({
      userName :['',Validators.required],
      password :['',Validators.required],
    });
  }

  onRegister()  {
    this.router.navigate(['register']);
  }

  onLogin()  {

    if(!this.loginForm.valid)
        return;

      this.errorMessage ='';     

        this.router.navigate(['dashboard']);
        
     
  }

}