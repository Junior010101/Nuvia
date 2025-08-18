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

  constructor(private router: Router) {}
  Navegar() {
    this.router.navigate([this.link]);
  }
}
