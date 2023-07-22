import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { User } from './Models/user.model';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  users :User[]=[];

  user : User ={
    id : '',
    email:"",
    password:"",
    firstName : "",
    lastName : "",
    phone : "",
    role : ""
  }
  showNavbar: boolean = true;
  constructor(private userService : UserServiceService , private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/admin-crud'||event.url === '/normal-user') {
          this.showNavbar = false;
        } else {
          this.showNavbar = true;
        }
      }
    });
  }
  ngOnInit(): void {
    this.GetAllUsers();

  }

  GetAllUsers(){
    
    this.userService.GetAllUsers().subscribe(response =>{
      this.users=response;});
  }

    onSubmit(){

      if(this.user.id==='')
      {
        this.userService.addUser(this.user)
        .subscribe(
          Response=>{
            this.GetAllUsers();
            this.user={
              id : '',
              email:"",
              password:"",
              firstName : "",
              lastName : "",
              phone : "",
              role : ""
            };
          }
          );

      }else{
        this.updateUser(this.user);
      }
     
    }

    deleteUser(id:string){
      this.userService.deleteUser(id)
      .subscribe(response =>{
        this.GetAllUsers();
      });

    }

    fillTheBlanks(user: User){
      this.user=user;
    }

    updateUser(user:User){
      this.userService.updateUser(user)
      .subscribe(response => {
        this.GetAllUsers();
      });
    }
}
