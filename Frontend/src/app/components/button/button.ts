import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() valor: any;
  @Input() link: any;
  @Input() w: any;
  @Input() h: any;
  @Input() disabled: boolean = false;

  constructor(private router: Router) {}

  Navegar() {
    if (!this.disabled && this.link) {
      this.router.navigate([this.link]);
    }
  }
}
