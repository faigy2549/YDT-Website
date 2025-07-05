import { Component, HostListener, ViewChild } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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
   constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
   if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 768;
    }
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
        this.activeItem = this.items.find(item => `/${item.label?.toLowerCase()}` === this.currentRoute);
      }
    });
  }
onActiveItemChange(event: MenuItem) {
  this.activeItem = event;
}
navToHome() {
  this.router.navigate(['/home']);
}

}
