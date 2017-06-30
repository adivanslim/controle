package br.com.arjnet.controle.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.arjnet.controle.modelo.Plano;

public interface Planos extends JpaRepository<Plano, Long>{

}
