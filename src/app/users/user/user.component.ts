import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

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
    this.paramsSubscription = this.route.params
      .subscribe(
        //whenever the parameter change, this arrow function is executed - get updated params as argument
        (params: Params) => {
          //update user-object
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

  //angular cleans up the subscription whenever this component is destroyed. The subscription will live on in memory
  //better way: store subscription in a property (paramsSubscription)
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
