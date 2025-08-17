import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {
  logoPath = 'assets/img/Favicon.png';
  Ilustracao = 'assets/svg/boy-9087310.svg';

  continuar() {
    // Se tiver roteamento:
    // this.router.navigate(['/proxima-pagina']);
  }
}
