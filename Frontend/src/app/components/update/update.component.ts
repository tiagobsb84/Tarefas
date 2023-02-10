import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  tarefa: Tarefa = {
    titulo: '',
    descricao: '',
    dataFinalizacao: new Date(),
    finalizado: false
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: TarefaService) {}

  ngOnInit(): void {
    this.tarefa.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.tarefa.id).subscribe((resposta) => {
      this.tarefa = resposta;
    })
  }

  atualizar(): void {
    this.service.finalizarTarefa(this.tarefa).subscribe((resposta) => {
      this.service.message('Atualizado a Tarefa com sucesso!');
      this.router.navigate(['']);
    }, error => {
      this.service.message('Falha ao atualizar Tarefa!');
      this.router.navigate(['']);
    })
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
