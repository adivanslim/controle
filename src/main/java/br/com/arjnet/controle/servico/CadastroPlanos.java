package br.com.arjnet.controle.servico;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.arjnet.controle.modelo.Plano;
import br.com.arjnet.controle.repositorio.Planos;

@Service
public class CadastroPlanos {

	@Autowired
	private Planos planos;

	public void salvar(Plano plano) {
		planos.save(plano);
	}

	public List<Plano> findAll() {
		return planos.findAll();
	}

	public Plano buscaUm(Long id) {
		return planos.findOne(id);
	}

	public void apagar(Long id) {
		planos.delete(id);
	}
	
	
	
}
