import { Component, HostListener, ViewChild } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  items: MenuItem[] = [];
  currentRoute: string = '';
  activeItem: MenuItem | undefined;
  @ViewChild('menu') menu!: OverlayPanel;
  isMobile = false;
  constructor(private router: Router) {}
  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }
  ngOnInit() {
    this.checkScreenSize();
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
        label: 'Apply',
        route: '/apply',
        command: () => {
          this.router.navigate(['/apply']);
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
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        console.log("Current Route:", this.currentRoute);
  
        this.activeItem = this.items.find(item => `/${item.label?.toLowerCase()}` === this.currentRoute);
        console.log("Active Item:", this.activeItem);
      }
    });
  }
onActiveItemChange(event: MenuItem) {
  this.activeItem = event;
}

}
