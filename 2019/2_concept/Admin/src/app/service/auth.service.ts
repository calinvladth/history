import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  server = 'http://localhost:8000'

  constructor(
    private http: HttpClient
  ) { }

  register(data) {
    return this.http.post(`${this.server}/auth/admin/register`, data)
  }

  login(data): Observable<any> {
    return this.http.post(`${this.server}/auth/admin/login`, data)
  }
}
