import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Tarefa } from '../models/Tarefa';

@Injectable({
  providedIn: 'root'
})

export class TarefaService {

  baseUrl = 'http://localhost:8080/tarefa'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.baseUrl);
  }

  delete(id: any): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
