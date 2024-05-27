import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User();

  constructor(private userService: UserService) { }

  register() {
    this.userService.register(this.user).subscribe(data => {
      console.log('User registered successfully', data);
    });
  }
}
