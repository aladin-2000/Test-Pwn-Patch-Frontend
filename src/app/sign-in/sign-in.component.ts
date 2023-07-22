import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  

  ngOnInit(): void {
  }
  user : User ={
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    email: "a",
    password: "a",
    firstName: "",
    lastName: "",
    phone: "",
    role: ""
  }


  constructor(private userService: UserServiceService, private router: Router) {}

  onSubmit() {

    this.userService.login(this.user).subscribe(
      response => {
        if (response.role === 'admin') {
          this.router.navigate(['/admin-crud']);
        } else if (response.role === 'user') {
          // Navigate to some other page
          this.router.navigate(['/normal-user']);
        }else{
          this.router.navigate(['/sign-up']);
        }
      },
      error => this.router.navigate(['/sign-up'])
    );
  }
}