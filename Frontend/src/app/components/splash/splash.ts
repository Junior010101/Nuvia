import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './splash.html',
})
export class SplashComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/NuviaSplash.json',
    loop: false,
    autoplay: true,
  };

  isVisible = true;
  isMounted = true;
  showSplash = true;

  constructor(private cdr: ChangeDetectorRef, private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.urlAfterRedirects.startsWith('/erro')) {
          this.showSplash = false;
          this.isMounted = false;
          this.cdr.detectChanges();
        }
      });
  }

  onAnimationComplete() {
    this.isVisible = false;
    this.cdr.detectChanges();

    setTimeout(() => {
      this.isMounted = false;
      this.cdr.detectChanges();
    }, 700);
  }
}
