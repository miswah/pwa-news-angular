import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarServiceService } from '../services/navbar-service.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent {
  constructor(
    public navbarSerice: NavbarServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navbarSerice.navbarStatus$.subscribe((val: boolean) => {
      if (val) {
        this.openNav();
      } else {
        this.closeNav();
      }
    });
  }

  openNav() {
    document.getElementById('myNav')!.style.width = '100%';
    document.getElementById('items')!.style.opacity = '1';
  }

  closeNav() {
    document.getElementById('myNav')!.style.width = '0%';
    document.getElementById('items')!.style.opacity = '0';
  }

  routeTo(type: number) {
    switch (type) {
      case 1:
        this.closeNav();
        break;
      case 2:
        this.router.navigateByUrl('/profile');
        this.closeNav();
        break;
      case 3:
        this.router.navigateByUrl('/transactions');
        this.closeNav();
        break;
      case 4:
        this.router.navigateByUrl('/order-history');
        this.closeNav();
        break;
      case 5:
        this.router.navigateByUrl('/help');
        this.closeNav();
        break;
    }
  }
}
