import { Component,ElementRef,ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonCard } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  public mensaje ="Hola"

  user={
    usuario:"",
    password:""
  }

  enviarInformacion() {
    let navigationExtras: NavigationExtras = {
      state: { user: this.user }
    }
    this.router.navigate(['/login'], navigationExtras);
  }

  mostarConsola(){
    console.log(this.user);
    if(this.user.usuario.length <8 && this.user.password.length <4){
      this.mensaje="Usuario conectado";
    } else{
      this.mensaje ="usuario y contraseña deben tener algun valor"
    }
  }

}
