import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarServiceService {
  private navBarStatus = new BehaviorSubject<boolean>(false);
  navbarStatus$: Observable<boolean> = this.navBarStatus.asObservable();

  constructor() {}

  //Open Navbar
  openNav() {
    this.navBarStatus.next(true);
  }

  //close navbar
  closeNav() {
    this.navBarStatus.next(false);
  }
}
