package br.com.arjnet.controle.servico;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.arjnet.controle.modelo.Cliente;
import br.com.arjnet.controle.repositorio.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;

	public void salvar(Cliente cliente) {
		cliente.valida();

		if (cliente.getId() == null) {
			cliente.setDataCricacao(new Date(System.currentTimeMillis()));
		}

		clienteRepository.save(cliente);
	}

	public List<Cliente> buscaTodos() {
		return clienteRepository.findAll();
	}

	public Cliente buscar(Long id) {
		return clienteRepository.findOne(id);
	}

	public void apaga(Long id) {
		clienteRepository.delete(id);
	}

}
