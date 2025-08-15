import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.html',
  styleUrl: './start.css'
})
export class Start {
  logoPath = 'assets/Favicon.png';
  vectorPath = 'assets/Vector.png';

  continuar() {
    console.log('Botão Continuar clicado');
    // Se tiver roteamento:
    // this.router.navigate(['/proxima-pagina']);
  }
}
