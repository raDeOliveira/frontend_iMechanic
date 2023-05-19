import { Component, Input } from '@angular/core';
import { ModalData } from 'src/app/model/modal-data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() modalData: ModalData | any;

  constructor() { }

  close(): void {
    // this.modalRef.close();
  }


}
