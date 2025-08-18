import { Component } from '@angular/core';
import { Input } from '../input/input';

@Component({
  selector: 'app-form',
  imports: [Input],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {}
