package br.com.arjnet.controle.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.arjnet.controle.modelo.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
