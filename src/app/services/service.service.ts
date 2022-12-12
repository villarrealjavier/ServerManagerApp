import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users.interfaces';




@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    private url:string='http://localhost:3000/users'
    private _users:[]=[]

    servers = [
        {
        id: 1,
        name: 'Productionserver',
        status: 'online'
        },
        {
        id: 2,
        name: 'Testserver',
        status: 'offline'
        },
        {
        id: 3,
        name: 'Devserver',
        status: 'offline'
        }
        ]

  constructor(private http:HttpClient) { 
   
  }
  get usuarios(){
      return [...this._users]
  }
  users():Observable<Users[]>{
    return this.http.get<Users[]>(`${this.url}`)

  }
  get servidores(){
      return [...this.servers]
  }

 
  
 
}