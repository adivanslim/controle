package br.com.arjnet.controle.servico;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.arjnet.controle.modelo.Plano;
import br.com.arjnet.controle.repositorio.PlanoRepository;

@Service
public class PlanoService {

	@Autowired
	private PlanoRepository planoRepository;

	public void salvar(Plano plano) {
		planoRepository.save(plano);
	}

	public List<Plano> buscaTodos() {
		return planoRepository.findAll();
	}

	public Plano buscaUm(Long id) {
		return planoRepository.findOne(id);
	}

	public void apagar(Long id) {
		planoRepository.delete(id);
	}
	
	
	
}
