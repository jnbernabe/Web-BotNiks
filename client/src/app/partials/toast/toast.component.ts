import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppToastService } from './app-toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit {
  constructor(public toastService: AppToastService) {}

  ngOnInit() {}

  showStandard() {
    this.toastService.show('Message', 'I am a standard toast');
  }

  isTemplate(toast: { textOrTpl: any }) {
    return toast.textOrTpl instanceof TemplateRef;
  }
  showSuccess() {
    this.toastService.show('I am a success toast', {
      classname: 'bg-success text-light',
      delay: 10000,
    });
  }

  showDanger() {
    this.toastService.show('I am an error toast', {
      classname: 'bg-danger text-light',
      delay: 15000,
    });
  }
}
