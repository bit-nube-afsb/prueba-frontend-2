import { Component } from '@angular/core';
import { ModalTypes } from '../../models/modal.types';
import { ModalComponent } from '../../components/modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  modalIsOpen = false;
  modalMode : 'department' | 'employee' = 'department';

  openModal(mode: any){
    this.modalMode = mode;
    this.modalIsOpen = true;
  }
  closeModal(){
    this.modalIsOpen = false;
  }
}
