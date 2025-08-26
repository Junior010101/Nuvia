import { Component } from '@angular/core';
import { input } from '../input/input';
import {
  FormBuilder,
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
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  onSubmit() {
    const { email, senha } = this.loginForm.value;

    if (!this.loginForm.valid) {
      alert(
        `Por favor, preencha todos os campos corretamente!, ${email} e ${senha}`
      );
      return;
    }

    if (email === 'admin@email.com' && senha === '1234') {
      alert('Login realizado com sucesso!');
      window.location.href = 'home.html';
    } else {
      alert('Email ou senha incorretos.');
    }
  }
}
