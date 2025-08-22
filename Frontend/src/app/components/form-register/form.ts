import { Component } from '@angular/core';
import { Button } from '../button/button';
import { input } from '../input/input';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-register',
  imports: [Button, input, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormRegister {
  RegisterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.RegisterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  onSubmit() {
    const { email, senha } = this.RegisterForm.value;

    if (!this.RegisterForm.valid) {
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
