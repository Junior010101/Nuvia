import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.html',
  styleUrl: './start.css'
})
export class Start {
  private readonly titleService = inject(Title);

  title() {
    return this.titleService.getTitle();
  }
}
