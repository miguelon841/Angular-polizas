import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpleadoModel } from 'src/app/model/EmpleadoModel';
import { EmpleadoService } from 'src/app/service/empleado.service';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{
  listEmpleado: EmpleadoModel[] = [];
  jsonObject: JSON;
  formEmpleado: FormGroup = new FormGroup({});
  actualizar:boolean = false;
  display='none';


  constructor(private empleadoService: EmpleadoService){
    this.jsonObject = <JSON>{};

  }
  ngOnInit(): void {
    this.list();
    this.formEmpleado = new FormGroup({
      IdEmpleado: new FormControl(''),
      Nombre: new FormControl(''),
      Apellido: new FormControl(''),
      Puesto: new FormControl(''),
    })

  }
  public onCloseHandled(){
    this.display='none';
  } 
  
  list(){
    this.empleadoService.getEmpleado().subscribe(resp =>{
      if(resp){
        var data = Object.values(resp);
        this.listEmpleado = Object.values(data[1]);
      }
    })
  }
  newEmpleado(){
    this.actualizar =false;
    this.display='block';
    this.formEmpleado.reset();
  }
  updateInventario(item:any){
    this.actualizar=true;
    this.display='block';
    this.formEmpleado.controls['IdEmpleado'].setValue(item.IdEmpleado);
    this.formEmpleado.controls['Nombre'].setValue(item.Nombre);
    this.formEmpleado.controls['Apellido'].setValue(item.Apellido);
    this.formEmpleado.controls['Puesto'].setValue(item.Puesto);
  }
  save(){
    this.empleadoService.saveEmpleado(this.formEmpleado.value).subscribe(resp=>{
      if(resp){
        console.log(resp);
        this.list();
        this.formEmpleado.reset();
        this.display='none';
      }
    })
  }
  update(){
    this.empleadoService.updateEmpleado(this.formEmpleado.value).subscribe(resp=>{
      if(resp){
        console.log(resp);
        this.list();
        this.formEmpleado.reset();
        this.display='none';
      }
    })
  }
  delete(id:any){
    var json = {
      "IdEmpleado":id
    };
    this.empleadoService.deleteEmpleado(json).subscribe(resp=>{
      if(resp){
        console.log(resp);
        this.list();
      }
    })
  }
}
