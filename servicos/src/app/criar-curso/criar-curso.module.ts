
import { CursosService } from '../cursos/cursos.service';
import { NgModule } from '@angular/core';

import { CriarCursoComponent } from './criar-curso.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarCursoComponent],
  providers: [CursosService]
})
export class CriarCursoModule { }
