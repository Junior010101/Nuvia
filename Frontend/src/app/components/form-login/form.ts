import { Component, OnInit } from '@angular/core';
import { input } from '../input/input';
import { Button } from '../button/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-login',
  imports: [ReactiveFormsModule, input, Button],
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
})
export class FormLogin implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
  });

  emailInvalid = false;
  emailVazio = true;

  constructor(
    public router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const emailControl = this.loginForm.get('email');

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

  onSubmit() {
    if (!this.loginForm.valid) {
      this.snackBar.open('Preencha todos os campos corretamente!', 'Fechar', {
        duration: 3000,
        panelClass: ['popup-erro'],
      });
      return;
    }

    const { email, senha } = this.loginForm.value;

    // Chamada HTTP pro backend
    this.http
      .post('http://localhost:3000/auth/login', { email, senha })
      .subscribe({
        next: (res: any) => {
          // Guarda o token no localStorage
          localStorage.setItem('token', res.token);

          this.snackBar.open('Login realizado com sucesso!', 'Fechar', {
            duration: 3000,
            panelClass: ['popup-sucesso'],
          });

          this.router.navigate(['/']); // Redireciona pro home
        },
        error: (err) => {
          this.snackBar.open(err.error?.message || 'Erro no login', 'Fechar', {
            duration: 3000,
            panelClass: ['popup-erro'],
          });
        },
      });
  }
}
