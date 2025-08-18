import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class InputText {
  @Input() Text: any;
  @Input() Class: any;
  @Input() w: any;
}
