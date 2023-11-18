import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/Modal/menu';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  menu:Menu[]=[];
  constructor(private service:ServiceService){}

  ngOnInit(){ 
    this.getmenu();
  }
 
  getmenu():void{
    this.service.getMenu().subscribe(
      data =>{
        this.menu= data;
      }
    )
  }
}
