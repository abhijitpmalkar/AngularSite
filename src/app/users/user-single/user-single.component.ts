import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent {
  user;
  constructor(private userService: UserService, private route:ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      const username=params['username'];

      this.userService.getUser(username).subscribe(user=> this.user = user);
    });
  }
}
