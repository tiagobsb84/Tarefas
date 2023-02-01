package br.com.tiago.tarefa.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.tiago.tarefa.model.Tarefa;
import br.com.tiago.tarefa.repository.TarefaRepository;

@Service
public class DBService {

	@Autowired
	private TarefaRepository tarefaRepository;
	
	public void instanciaBancoDados() throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		
		Tarefa t1 = new Tarefa(null, "Estudar", "Java", sdf.parse("18/10/2020"), true);
		Tarefa t2 = new Tarefa(null, "Jogar", "Dota2", sdf.parse("15/11/2011"), false);
		Tarefa t3 = new Tarefa(null, "Caminhar", "Vila Olimpica", sdf.parse("01/10/2000"), true);
		Tarefa t4 = new Tarefa(null, "DevOps", "Docker", sdf.parse("08/11/2023"), false);
		
		this.tarefaRepository.saveAll(Arrays.asList(t1, t2, t3, t4));
	}
}
