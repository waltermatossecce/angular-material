import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loading:boolean=false;

  form:FormGroup

  constructor(private fb:FormBuilder,private _snackBar: MatSnackBar,
    private router:Router){

    this.form =this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
  })
  }
    

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    
    if(usuario=='walter' && password=='walter123'){
       //direccionamos al dashboard
       this.router.navigate(['dashboard'])
       this.fakeLoading();
    }else{
      this.error();
       this.form.reset();
    }
  }

  fakeLoading():void{
    this.loading=true;
    setTimeout(() => {
      
      //Nos dirigimos hacia el dashboard
      this.router.navigate(['dashboard'])
    }, 1500);
  }

  error():void{
    this._snackBar.open('usuario y password ingresados son correctamente invalidos','',{
      duration:3000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

}
