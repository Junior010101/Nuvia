import { Component } from '@angular/core';
import { InputText } from '../input/input';

@Component({
  selector: 'app-form',
  imports: [InputText],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {}
