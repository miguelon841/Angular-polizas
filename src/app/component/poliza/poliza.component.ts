import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PolizaModel } from 'src/app/model/Polizamodel';
import { PolizaService } from 'src/app/service/poliza.service';

@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.css']
})
export class PolizaComponent implements OnInit{
  listPoliza: PolizaModel[] = [];
  jsonObject: JSON;
  formPoliza: FormGroup = new FormGroup({});
  actualizar:boolean = false;

  constructor(private polizaService: PolizaService){
    this.jsonObject = <JSON>{};

  }
  display='none';
  
 public onCloseHandled(){
  this.display='none';
}
  ngOnInit(): void {
    this.list();
    this.formPoliza = new FormGroup({
      IdPolizas: new FormControl(''),
      EmpleadoGenero: new FormControl(''),
      SKU: new FormControl(''),
      Cantidad: new FormControl(''),
      Fecha: new FormControl(''),
    })

  } 
  list(){
    this.polizaService.getPoliza().subscribe(resp =>{
      if(resp){
        var data = Object.values(resp);
        this.listPoliza = Object.values(data[1]);
      }
    })
  }
  newPoliza(){
    this.actualizar =false;
    this.display='block';
    this.formPoliza.reset();
  }
  updatePoliza(item:any){
    this.actualizar=true;
    this.display='block';
    this.formPoliza.controls['IdPolizas'].setValue(item.IdPolizas);
    this.formPoliza.controls['EmpleadoGenero'].setValue(item.EmpleadoGenero);
    this.formPoliza.controls['SKU'].setValue(item.SKU);
    this.formPoliza.controls['Cantidad'].setValue(item.Cantidad);
    this.formPoliza.controls['Fecha'].setValue(item.Fecha);
  }
  save(){
    var fecha = this.formPoliza.controls['Fecha'];
    var fechaMod = fecha.value.replaceAll('-','')
    console.log(fechaMod);
    this.formPoliza.controls['Fecha'].setValue(fechaMod);

    this.polizaService.savePoliza(this.formPoliza.value).subscribe(resp=>{
      if(resp){
        console.log(resp);
        this.list();
        this.formPoliza.reset();
        this.display='none';
      }
    })
  }
  update(){
    this.polizaService.updatePoliza(this.formPoliza.value).subscribe(resp=>{
      if(resp){
        var data = Object.values(resp);
        var status = data[0];
        this.list();
        this.formPoliza.reset();
        this.display='none';
      }
    })
  }
  delete(id:any){
    var json = {
      "IdPolizas":id
    };
    this.polizaService.deletePoliza(json).subscribe(resp=>{
      if(resp){
        console.log(resp);
        this.list();
      }
    })
  }
}
