import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlform: FormGroup;
  url = [];
  constructor(private builder :FormBuilder) { }

  ngOnInit(): void {

    this.urlform = this.builder.group({
      urlid: ['',Validators.required],
      urlname: ['',Validators.required],
      urllink: ['',Validators.required],
      decription: ['',Validators.required],
      userid: ['',Validators.required],
      createdon: ['',Validators.required]
    })
  }

  Save() {
    console.log(this.urlform.value);
    this.url[0] = this.urlform.value;
  }

}
