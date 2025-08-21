import { Component } from '@angular/core';
import { FormLogin } from '../../../components/form-login/form';
import { FormLayout } from '../../../components/form-layout/form-layout';

@Component({
  selector: 'app-login',
  imports: [FormLogin, FormLayout],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {}
