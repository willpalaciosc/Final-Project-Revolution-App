import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signUpUrl = "http://localhost:3003/api/user"
  private loginUrl = "http://localhost:3003/api/auth "
  
  constructor(private http: HttpClient , private _router : Router) { }

  signUpUser(user:any){
  return this.http.post<any>(this.signUpUrl,user)
  }

  loginUser(user:any){
    return this.http.post<any>(this.loginUrl,user)
  }

  isLogged(){
    return !!localStorage.getItem('token')
  }
getToken(){
  return localStorage.getItem('token')
}
logout(){
  localStorage.removeItem('token')
  return this._router.navigate(['/login'])
}
}