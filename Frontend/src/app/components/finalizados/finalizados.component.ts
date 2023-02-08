import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit{

  listaFinalizado: Tarefa[] = [];

  constructor(private service: TarefaService, private router: Router) {}

  ngOnInit(): void {
    this.findAllFinalizado();
  }

  findAllFinalizado(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(tarefa => {
        if(tarefa.finalizado) {
          this.listaFinalizado.push(tarefa);
        }
      })
    })
  }

  voltar(): void {
    this.router.navigate([''])
  }
}
