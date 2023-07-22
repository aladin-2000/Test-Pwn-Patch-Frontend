import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-admin-crud',
  templateUrl: './admin-crud.component.html',
  styleUrls: ['./admin-crud.component.css']
})
export class AdminCRUDComponent implements OnInit {

 
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
