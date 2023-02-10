import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  tarefa: Tarefa = {
    titulo: '',
    descricao: '',
    dataFinalizacao: new Date(),
    finalizado: false
  }

  constructor(private router: Router, private service: TarefaService) {}

  ngOnInit(): void {
    
  }

  cancel(): void {
    this.router.navigate(['']);
  }

  create(): void {
    this.formatandoData();
    this.service.create(this.tarefa).subscribe((resposta) => {
      this.service.message('Tarefa criado com sucesso!');
      this.router.navigate(['']);
    }, err => {
      this.service.message('Falha ao criar Tarefa!');
      this.router.navigate(['']);
    })
  }

  formatandoData(): void {
    let data = new Date(this.tarefa.dataFinalizacao);
    this.tarefa.dataFinalizacao = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

}
