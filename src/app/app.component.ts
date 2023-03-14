import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  mostrarInventario:boolean = false;
  mostrarEmpleado:boolean = false;
  mostrarPoliza:boolean = false;


  title = 'poliza';

  ngOnInit() {
  }
  showEmpleado(){
    this.mostrarEmpleado = true;
    this.mostrarInventario  = false;
    this.mostrarPoliza = false;
  }
  showInventario(){
    this.mostrarEmpleado = false;
    this.mostrarInventario  = true;
    this.mostrarPoliza = false;
  }
  showPoliza(){
    this.mostrarEmpleado = false;
    this.mostrarInventario  = false;
    this.mostrarPoliza = true;
  }
}
