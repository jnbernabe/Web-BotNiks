import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppToastService {
  toasts: any[] = [];

  constructor() {}

  showanother(header: string, body: string) {
    this.toasts.push({ header, body });
  }
  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t != toast);
  }

  isTemplate(toast: { textOrTpl: any }) {
    return toast.textOrTpl instanceof TemplateRef;
  }

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  showSuccess(text: string) {
    this.show(text, {
      classname: 'bg-success text-light',
      delay: 5000,
    });
  }
  showDanger(text: string) {
    this.show(text, {
      classname: 'bg-danger text-light',
      delay: 5000,
    });
  }
}
