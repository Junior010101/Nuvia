import { Component, OnInit } from '@angular/core';
import { Button } from '../button/button';
import { input } from '../input/input';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  imports: [ReactiveFormsModule, Button, input],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormRegister {
  RegisterForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    sobrenome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    senha2: new FormControl('', Validators.required),
  });

  constructor(public router: Router) {}

  emailInvalid = false;
  emailVazio = true;
  senha2Vazia = true;
  senha2Invalida = false;

  ngOnInit() {
    // Pega o controle do email
    const emailControl = this.RegisterForm.get('email');

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
    const { nome, sobrenome, email, senha } = this.RegisterForm.value;

    if (!this.RegisterForm.valid) {
      alert('Por favor, preencha todos os campos corretamente!');
      return;
    }

    if (this.RegisterForm.value.senha !== this.RegisterForm.value.senha2) {
      const senha = this.RegisterForm.get('senha')?.value;
      const senha2 = this.RegisterForm.get('senha2')?.value;

      if (!senha2) {
        this.senha2Vazia = true;
        this.senha2Invalida = false;
      } else if (senha !== senha2) {
        this.senha2Vazia = false;
        this.senha2Invalida = true;
      } else {
        this.senha2Vazia = false;
        this.senha2Invalida = false;
      }
      return;
    }

    alert(`Usuário: ${nome} ${sobrenome} cadastrado com sucesso!`);
    // aqui você pode fazer router.navigate(['/home']) ou enviar para backend
  }
}
