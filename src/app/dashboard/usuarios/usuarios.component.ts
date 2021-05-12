import { Component, OnInit } from '@angular/core';
import usuariosData from '../../data.json';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  Usuarios: any = usuariosData;

  constructor() { }

  ngOnInit(): void {
  }

}
