import { Component } from '@angular/core';
import { FormLayout } from '../../../components/form-layout/form-layout';
import { FormRegister } from '../../../components/form-register/form';

@Component({
  selector: 'app-register',
  imports: [FormLayout, FormRegister],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {}
