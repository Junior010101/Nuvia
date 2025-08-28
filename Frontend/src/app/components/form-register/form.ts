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
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-register',
  imports: [ReactiveFormsModule, Button, input],
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
})
export class FormRegister implements OnInit {
  RegisterForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    sobrenome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    senha2: new FormControl('', Validators.required),
  });

  emailInvalid = false;
  emailVazio = true;
  senha2Vazia = true;
  senha2Invalida = false;

  constructor(
    public router: Router,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const emailControl = this.RegisterForm.get('email');

    emailControl?.valueChanges.subscribe(() => {
      if (emailControl.value === '') {
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

  verificaSenha2() {
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
  }

  onSubmit() {
    if (!this.RegisterForm.valid) {
      this.snackBar.open('Preencha todos os campos corretamente!', 'Fechar', {
        duration: 3000,
        panelClass: ['popup-erro'],
      });
      return;
    }

    const { nome, sobrenome, email, senha, senha2 } = this.RegisterForm.value;

    if (senha !== senha2) {
      this.snackBar.open('As senhas não coincidem!', 'Fechar', {
        duration: 3000,
        panelClass: ['popup-erro'],
      });
      return;
    }

    this.http
      .post('http://localhost:3000/auth/cadastro', {
        nome,
        sobrenome,
        email,
        senha,
      })
      .subscribe({
        next: (res: any) => {
          this.snackBar.open(
            `Usuário ${nome} ${sobrenome} cadastrado com sucesso!`,
            'Fechar',
            { duration: 3000, panelClass: ['popup-sucesso'] }
          );
          this.router.navigateByUrl('/login');
        },
        error: (err: any) => {
          // aqui você trata todos os erros do backend
          const msg = err.error?.message || 'Erro na requisição';
          this.snackBar.open(msg, 'Fechar', {
            duration: 5000,
            panelClass: ['popup-erro'],
          });
        },
      });
  }
}
