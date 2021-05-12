import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import data from '../data.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  usuarios: any = data;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  iniciarSesion(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/dashboard']);
    }, 4500);
  }

}
