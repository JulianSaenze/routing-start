import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  //get access to the currently loaded route (give access to the selected user (id) passed in the URL)
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //retrieve parameter from the url
    this.user = {
      //retrieving parameter from app.module.ts - {path: 'users/:id/:name', component: UsersComponent}
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    //params is an Observable (allow to work with asynchronous task - subscribe to some event that might happen in the future)
    this.route.params
      .subscribe(
        //whenever the parameter change, this arrow function is executed - get updated params as argument
        (params: Params) => {
          //update user-object
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

}
