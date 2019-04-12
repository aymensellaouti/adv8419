import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showNav = false;
  constructor(
    private router: Router,
    private authentificationService: AuthentificationService
    ) { }
  ngOnInit() {
  }
  showNavbar() {
    this.showNav = !this.showNav;
  }
  naviguer(maRoute) {
    const link = [maRoute];
    this.router.navigate(link);
  }
  logout() {
    localStorage.removeItem('token');
    this.authentificationService.setIsLogged(false);
  }
}
