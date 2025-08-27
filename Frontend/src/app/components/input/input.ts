import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
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
  @Input() control: FormControl | any;
  @Output() blurEvent = new EventEmitter<void>();

  onBlur() {
    this.blurEvent.emit();
  }
}
