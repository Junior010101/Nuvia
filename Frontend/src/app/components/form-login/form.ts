import { Component } from '@angular/core';
import { input } from '../input/input';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Button } from '../button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  imports: [ReactiveFormsModule, input, Button],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormLogin {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
  });

  constructor(public router: Router) {}

  emailInvalid = false;
  emailVazio = true;

  ngOnInit() {
    const emailControl = this.loginForm.get('email');

    // Escuta mudanças de valor
    emailControl?.valueChanges.subscribe((value) => {
      if (value === '') {
        this.emailVazio = true;
        this.emailInvalid = false;
      } else if (emailControl.invalid && emailControl.touched) {
        this.emailVazio = false;
        this.emailInvalid = true;
      } else {
        this.emailVazio = false;
        this.emailInvalid = false;
      }
    });
  }

  onSubmit() {
    const { email, senha } = this.loginForm.value;

    if (!this.loginForm.valid) {
      alert(`Por favor, preencha todos os campos corretamente!`);
      return;
    }

    if (email === 'admin@email.com' && senha === '1234') {
      alert('Login realizado com sucesso!');
      window.location.href = 'home.html';
    } else {
      alert('Usuario não cadastrado.');
    }
  }
}
