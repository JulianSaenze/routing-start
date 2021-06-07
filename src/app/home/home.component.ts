import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServers() {
    // some complex calculation. Access backend or whatever.
    //After this is done navigate to server-site
    //Somehow get access to the Router
    this.router.navigate(['/servers']);
  }

}
