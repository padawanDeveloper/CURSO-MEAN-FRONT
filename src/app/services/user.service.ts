import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { GLOBAL } from "./global";

@Injectable()
export class UserService {
  public url: string;
  public token: string;
  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  register(user: User): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/json; charset=utf-8"
    );
    return this._http.post(this.url + "register", params, { headers: headers });
  }

  login(user: User): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/json; charset=utf-8"
    );
    return this._http.post(this.url + "login", params, { headers: headers });
  }

  getToken() {
    const token = localStorage.getItem("token");
    if (token) return (this.token = token);
    return this.token;
  }
}
