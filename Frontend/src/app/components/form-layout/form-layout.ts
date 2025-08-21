import { Component } from '@angular/core';

@Component({
  selector: 'app-form-layout',
  imports: [],
  templateUrl: './form-layout.html',
  styleUrls: ['./form-layout.css'],
})
export class FormLayout {
  activeCardIndex = 0; // inicia com o card do centro ativo

  cards = [
    {
      img: 'assets/img/image.png',
      title: 'Card 1',
      text: 'Texto do primeiro card. Informações extras aqui.',
      updated: 'Atualizado há 3 min',
    },
    {
      img: 'assets/img/image.png',
      title: 'Card 2',
      text: 'Texto do segundo card. Informações extras aqui.',
      updated: 'Atualizado há 3 min',
    },
    {
      img: 'assets/img/image.png',
      title: 'Card 3',
      text: 'Texto do terceiro card. Informações extras aqui.',
      updated: 'Atualizado há 3 min',
    },
  ];

  moveTopToCenter() {
    const [top, mid, bot] = this.cards;
    this.cards = [bot, top, mid];
  }

  moveBottomToCenter() {
    const [top, mid, bot] = this.cards;
    this.cards = [mid, bot, top];
  }

  selectCard(i: number) {
    if (i === 2) {
      this.moveTopToCenter();
      if (this.activeCardIndex > 0) {
        this.activeCardIndex -= 1;
      } else {
        this.activeCardIndex = 2;
      }
    } else if (i === 1) {
      this.moveBottomToCenter();
      if (this.activeCardIndex < 2) {
        this.activeCardIndex += 1;
      } else {
        this.activeCardIndex = 0;
      }
    }
  }
}
