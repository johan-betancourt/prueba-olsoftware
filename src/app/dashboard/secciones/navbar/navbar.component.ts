import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() widthSidebar = new EventEmitter<number>();
  sidebar = 65;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(): void {
    this.router.navigate(['/']);
  }

  deslizarMenu(): void {
    if (this.sidebar === 65) {
      this.sidebar = 255;
      this.widthSidebar.emit(this.sidebar);
    } else {
      this.sidebar = 65;
      this.widthSidebar.emit(this.sidebar);
    }
  }

}
