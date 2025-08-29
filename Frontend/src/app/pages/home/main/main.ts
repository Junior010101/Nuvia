import { Component } from '@angular/core';
import { Sidebar } from '../../../components/sidebar/sidebar';
import { Button } from '../../../components/button/button';

@Component({
  selector: 'app-main',
  imports: [Sidebar, Button],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
