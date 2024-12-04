import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalTypes } from '../../models/modal.types';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() mode : ModalTypes.DEPARTMENT | ModalTypes.EMPLOYEE = ModalTypes.DEPARTMENT;
  @Output() close = new EventEmitter<void>();
  department : Department ={
    codigo: 0,
    nombre: ''
  }
  // TODO - crear tipo de empleado como se hizo con departamento
  employee = {
    codigo: 0,
    nombre: '',
    apellido1: '',
    apellido2: '',
    codigo_departamento : 0
  }


  save() {
    if(this.mode == ModalTypes.DEPARTMENT){
      // Simulando hacer el llamado al backend
      console.log("Se guardó el departamento");
      
    } else if(this.mode == ModalTypes.EMPLOYEE ){
      console.log("Se guardó el empleado");
      
    }
    this.close.emit();
  }
}
