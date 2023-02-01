package br.com.tiago.tarefa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.tiago.tarefa.model.Tarefa;
import br.com.tiago.tarefa.repository.TarefaRepository;

@Service
public class TarefaService {

	@Autowired
	private TarefaRepository tarefaRepository;
	
	public List<Tarefa> buscarTodos() {
		List<Tarefa> listaTodos = tarefaRepository.findAll();
		return listaTodos;
	}
}
