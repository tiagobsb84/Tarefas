package br.com.tiago.tarefa.config;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import br.com.tiago.tarefa.service.DBService;

@Configuration
@Profile("test")
public class TestDBConfig {

	@Autowired
	private DBService dbService;
	
	@Bean
	public boolean instancia() throws ParseException {
		this.dbService.instanciaBancoDados();
		return true;
	}
}
