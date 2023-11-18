import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/Modal/menu';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getMenu():Observable<Menu[]>{
    return this.http.get<Menu[]>('./assets/data/menu.json');
  }
}
