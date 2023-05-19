import { Component, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title!: string;
  @Input() srcImg!: string;
  @Input() notes!: string;

  constructor(public modalRef: MdbModalRef<ModalComponent>) { }

}
