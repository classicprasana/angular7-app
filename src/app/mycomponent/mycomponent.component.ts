import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  newcomponet ="entered a new component created"


  // here also we can inject the ProductService like where ever we want we can inject the service
  constructor() { }

  ngOnInit(): void {
  }

}
