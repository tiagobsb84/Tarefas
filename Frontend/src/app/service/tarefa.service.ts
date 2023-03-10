import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { Tarefa } from '../models/Tarefa';

@Injectable({
  providedIn: 'root'
})

export class TarefaService {

  baseUrl = 'http://localhost:8080/tarefa';

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.baseUrl);
  }

  delete(id: any): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, `OK`, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

  finalizarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    const url = `${this.baseUrl}/${tarefa.id}`;
    return this.http.put<Tarefa>(url, tarefa);
  }

  create(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.baseUrl, tarefa);
  }

  findById(id: any): Observable<Tarefa> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Tarefa>(url);
  }
}
