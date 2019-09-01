import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

private username:string;
private clientid ='94fac37d9c2667c93724';
private clientsercret = 'c00c3a6fae6672a448f04a1261a4cc8be6eae372';

  constructor(private http:HttpClient) { }
}
