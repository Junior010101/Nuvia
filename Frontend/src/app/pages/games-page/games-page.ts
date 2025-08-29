import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-games-page',
  imports: [Sidebar],
  templateUrl: './games-page.html',
  styleUrl: './games-page.css',
})
export class GamesPage {}
