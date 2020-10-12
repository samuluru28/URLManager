import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {

  urlform: FormGroup;
  url = [];
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, manufacturingDate: '10/09/2020' },
    { make: 'Ford', model: 'Mondeo', price: 32000, manufacturingDate: '09/09/2020' },
    { make: 'Porsche', model: 'Boxter', price: 72000, manufacturingDate: '08/09/2020' }

    ];
  constructor(private builder :FormBuilder) { }
  

  ngOnInit(): void {
    this.urlform = this.builder.group({
      urlid: ['',Validators.required],
      urlname: ['',Validators.required],
      urllink: ['',Validators.required],
      description: ['',Validators.required],
      userid: ['',Validators.required],
      validtill: ['',Validators.required]
    })
  }

  Save() {
    console.log(this.urlform.value);
    this.url[0] = this.urlform.value;
  }

}
