import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-home',
  imports: [Sidebar, Button],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
