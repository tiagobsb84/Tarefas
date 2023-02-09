import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefa';

import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  list: Tarefa[] = [];

  listaFinalizado: Tarefa[] = [];

  count = 0;

  constructor(private service: TarefaService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(tarefa => {
        if(tarefa.finalizado) {
          this.listaFinalizado.push(tarefa);
        } else {
          this.list.push(tarefa);
        }
        this.count = this.listaFinalizado.length;
      })
    })   
  }

  delete(id: any): void {
    this.service.delete(id).subscribe((resposta) => {
      if(resposta === null) {
        this.service.message('Deletado com sucesso');
        this.list = this.list.filter(tarefa => tarefa.id !== id);
      }
    })
  }

  navegandoParaFinalizados(): void {
    this.router.navigate(['finalizados'])
  }

  navegandoParaUpdate(): void {
    this.router.navigate(['update'])
  }

  finalizarTarefa(tarefa: Tarefa): void {
    tarefa.finalizado = true;
    this.service.finalizarTarefa(tarefa).subscribe((resposta) => {
      if(resposta) {
        this.service.message('Finalizado com Sucesso');
        this.list = this.list.filter(item => tarefa.id !== item.id);
        this.count++;
      }
    })
  }
}
