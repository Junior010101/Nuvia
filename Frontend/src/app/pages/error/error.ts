import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-error',
  templateUrl: './error.html',
  styleUrls: ['./error.css'],
  imports: [Button],
})
export class Error {
  code: number = 0;
  msg: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      const code = Number(params['code']);
      if (code === 404) {
        this.code = 404;
        this.msg = 'Página não encontrada';
      } else if (code === 403) {
        this.code = 403;
        this.msg = 'Acesso Negado';
      } else {
        this.router.navigate(['/erro'], { queryParams: { code: 404 } });
        return;
      }

      // Define o título da página dinamicamente **depois que this.msg foi setada**
      document.title = 'Erro: ' + this.msg;
    });
  }
}
