import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-customizadas',
  templateUrl: './diretiva-customizadas.component.html',
  styleUrls: ['./diretiva-customizadas.component.css']
})
export class DiretivaCustomizadasComponent implements OnInit {

  constructor() { }
  
  mostrarCursos: boolean = false;

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }


}
