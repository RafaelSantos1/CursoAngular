import { AlunosModule } from './../alunos.module';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {


    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
        console.log(this.aluno);
      }
    );
    // console.log('ngOnInit: AlunoDetalheComponent');
    // this.inscricao = this.route.data.subscribe(
    //   (info: {aluno: Aluno}) => {
    //     console.log('Recebendo o obj Aluno do resolver');
    //     this.aluno = info.aluno;
    //   }
    // );
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
