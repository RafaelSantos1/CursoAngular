import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] ;
  cursosService: CursosService;

  constructor(private _cursosService: CursosService) {
    // this.cursosService = new CursosService();
     this.cursosService = _cursosService;
   }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
