import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
