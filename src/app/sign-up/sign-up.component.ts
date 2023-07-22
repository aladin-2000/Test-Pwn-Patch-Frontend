import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../Models/user.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  users :User[]=[];

  user : User ={
    id : '',
    email:"",
    password:"",
    firstName : "",
    lastName : "",
    phone : "",
    role : "user"
  }
  constructor(private userService : UserServiceService){}
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
