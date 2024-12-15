import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
      this.items = [
          {
            label: 'Home',
              command: () => {
                this.router.navigate(['/home']);
            }
          },
          {
              label: 'About',
              command: () => {
                  this.router.navigate(['/about']);
              }
          },
          {
            label: 'Rebbeim',
              command: () => {
                this.router.navigate(['/rebbeim']);
            }
          },
          {
            label: 'Shiurim',
              command: () => {
                this.router.navigate(['/shiurim']);
            }
          },
          {
            label: 'Alumni',
              command: () => {
                this.router.navigate(['/alumni']);
            }
          },
          {
            label: 'Donate',
              command: () => {
                this.router.navigate(['/donate']);
            }
          },
          {
            label: 'Contact',
              command: () => {
                this.router.navigate(['/contact']);
            }
          },
      ];
  }
}

