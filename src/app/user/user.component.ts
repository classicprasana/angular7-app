import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {

    "id": 890,
    "name":"prasanna",
    "email":"email2jena@gmail.com",
    "mobile":8989787865

  }
  constructor() { }

  ngOnInit(): void {
  }

}
