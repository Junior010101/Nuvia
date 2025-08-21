import { Component } from '@angular/core';
import { InputText } from '../input/input';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  imports: [InputText, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormLogin {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  onSubmit() {
    const { email, senha } = this.loginForm.value;

    if (!this.loginForm.valid) {
      alert('Por favor, preencha todos os campos corretamente!');
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
