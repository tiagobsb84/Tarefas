import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';

import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  list: Tarefa [] = [];

  constructor(private service: TarefaService) {}

  ngOnInit(): void {
    this.findAll();
    console.log(this.findAll)
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
    })
  }
}
