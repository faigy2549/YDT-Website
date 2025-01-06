import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        route: '/home',
        command: () => {
          this.router.navigate(['/home']);
        }
      },
      {
        label: 'About',
        route: '/about',
        command: () => {
          this.router.navigate(['/about']);
        }
      },
      {
        label: 'Hanhala',
        route: '/hanhala',
        command: () => {
          this.router.navigate(['/hanhala']);
        }
      },
      {
        label: 'Shiurim',
        route: '/shiurim',
        command: () => {
          this.router.navigate(['/shiurim']);
        }
      },
      {
        label: 'Alumni',
        route: '/alumni',
        command: () => {
          this.router.navigate(['/alumni']);
        }
      },
      {
        label: 'Newsletter',
        route: '/newsletter',
        command: () => {
          this.router.navigate(['/newsletter']);
        }
      },
      {
        label: 'Donate',
        route: '/donate',
        command: () => {
          this.router.navigate(['/donate']);
        }
      },
      {
        label: 'Contact',
        route: '/contact',
        command: () => {
          this.router.navigate(['/contact']);
        }
      }
    ];
  }
}
