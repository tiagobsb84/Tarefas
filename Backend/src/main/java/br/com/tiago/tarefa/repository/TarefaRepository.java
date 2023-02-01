package br.com.tiago.tarefa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.tiago.tarefa.model.Tarefa;

public interface TarefaRepository extends JpaRepository<Tarefa, Integer> {

	@Query("SELECT obj FROM Tarefa obj WHERE obj.finalizado = true ORDER BY obj.dataFinalizacao")
	List<Tarefa> findAllClosed();

}
