import { Component, OnInit } from '@angular/core';
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

  // showSuccess() {
  //   this.toastService.show('I am a success toast', {
  //     classname: 'bg-success text-light',
  //     delay: 10000,
  //   });
  // }

  // showDanger(dangerTpl) {
  //   this.toastService.show(dangerTpl, {
  //     classname: 'bg-danger text-light',
  //     delay: 15000,
  //   });
  // }
}
