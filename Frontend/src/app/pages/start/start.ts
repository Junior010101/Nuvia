import { Component } from '@angular/core';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-start',
  imports: [Button],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {
  logoPath = 'assets/img/Favicon.png';
  Ilustracao = 'assets/svg/boy-9087310.svg';
}
