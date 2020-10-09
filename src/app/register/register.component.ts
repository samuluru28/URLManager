import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationform: FormGroup;
  registration = [];
  constructor(private builder :FormBuilder) { }
  
  ngOnInit(): void {
    this.registrationform = this.builder.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
      phone: ['',Validators.required],
      email: ['',Validators.required]      
    })
  }

  Register() {
    console.log(this.registrationform.value);
    this.registrationform[0] = this.registrationform.value;
  }

}
