import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseURL='https://localhost:7080/test'

  constructor(private http : HttpClient) { }

  // get all users

  GetAllUsers():Observable<User[]>{
   
    return this.http.get<User[]>(this.baseURL);
  }


  addUser(user:User):Observable<User>{
    user.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<User>(this.baseURL,user);
  }
  deleteUser(id : string): Observable<User>{
    return this.http.delete<User>(this.baseURL+"/"+id);

  }
  updateUser(user:User):Observable<User>{
    return this.http.put<User>(this.baseURL+"/"+user.id,user);
  }
  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseURL}/login`, user);
  }

}
