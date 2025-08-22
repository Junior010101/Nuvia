import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class input {
  @Input() Text: any;
  @Input() Class: any;
  @Input() w: any;
  @Input() type: any;
  show: any = false;
  @Input() id: any;
}
