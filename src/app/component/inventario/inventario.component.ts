import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InventarioModel } from 'src/app/model/InventarioModel';
import { InventarioService } from 'src/app/service/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit{
  listInventario: InventarioModel[] = [];
  jsonObject: JSON;
  formInventario: FormGroup = new FormGroup({});
  actualizar:boolean = false;

  constructor(private inventarioService: InventarioService){
    this.jsonObject = <JSON>{};

  }
  display='none';
  
 public onCloseHandled(){
  this.display='none';
}
  ngOnInit(): void {
    this.list();
    this.formInventario = new FormGroup({
      SKU: new FormControl(''),
      Nombre: new FormControl(''),
      Cantidad: new FormControl(''),
    })

  } 
  list(){
    this.inventarioService.getInventario().subscribe(resp =>{
      if(resp){
        var data = Object.values(resp);
        console.log(Object.values(data[0])[0]);
        this.listInventario = Object.values(data[1]);
      }
    })
  }
  newInventario(){
    this.actualizar =false;
    this.display='block';
    this.formInventario.reset();
  }
  updateInventario(item:any){
    this.actualizar=true;
    this.display='block';
    this.formInventario.controls['SKU'].setValue(item.SKU);
    this.formInventario.controls['Nombre'].setValue(item.Nombre);
    this.formInventario.controls['Cantidad'].setValue(item.Cantidad);
  }
  save(){
    this.inventarioService.saveInventario(this.formInventario.value).subscribe(resp=>{
      if(resp){
        console.log(resp);
        this.list();
        this.formInventario.reset();
        this.display='none';
      }
    })
  }
  update(){
    this.inventarioService.updateInventario(this.formInventario.value).subscribe(resp=>{
      if(resp){
        console.log(resp);
        this.list();
        this.formInventario.reset();
        this.display='none';
      }
    })
  }
  delete(id:any){
    var json = {
      "SKU":id
    };
    this.inventarioService.deleteInventario(json).subscribe(resp=>{
      if(resp){
        console.log(resp);
        this.list();
      }
    })
  }
}
