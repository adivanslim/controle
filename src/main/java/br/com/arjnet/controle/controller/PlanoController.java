package br.com.arjnet.controle.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import br.com.arjnet.controle.modelo.Plano;
import br.com.arjnet.controle.servico.PlanoService;

@Controller
@RequestMapping("/plano")
public class PlanoController {

	@Autowired
	private PlanoService planoService;
	
	@GetMapping("/formulario")
	public ModelAndView formulario(Plano plano) {
		ModelAndView modelAndView = new ModelAndView("PlanoFormulario");
		modelAndView.addObject(new Plano());
		return modelAndView;
	}
	
	@PostMapping
	public ModelAndView salvar(@Validated Plano plano, Errors errors, RedirectAttributes redirectAtt) {
		ModelAndView modelAndView = new ModelAndView("PlanoFormulario");
		modelAndView.addObject(plano);
		if (errors.hasErrors())
			return modelAndView;
		
		modelAndView.clear();
		planoService.salvar(plano);
		redirectAtt.addFlashAttribute("mensagem", "Plano " + plano.getNomePlano() + " salvo com sucesso");
		modelAndView.setViewName("redirect:plano");
		return modelAndView;
	}

	@GetMapping
	public ModelAndView listar() {
		List<Plano> planoList = planoService.buscaTodos();
		ModelAndView modelAndView = new ModelAndView("PlanoLista");
		modelAndView.addObject("planos", planoList);
		return modelAndView;
	}

	@GetMapping("{id}")
	public ModelAndView buscar(@PathVariable("id") Long id) {
		Plano plano = planoService.buscaUm(id);
		ModelAndView modelAndView = new ModelAndView("Plano");
		modelAndView.addObject(plano);
		return modelAndView;
	}
	
	@GetMapping("/editar/{id}")
	public ModelAndView editar(@PathVariable("id") Long id){
		Plano plano = planoService.buscaUm(id);
		ModelAndView modelAndView = new ModelAndView("PlanoFormulario");
		modelAndView.addObject(plano);
		return modelAndView;
	}
	
	@DeleteMapping("{id}")
	public ModelAndView apaga(@PathVariable("id") Long id, RedirectAttributes redirectAtt){
		planoService.apagar(id);
		ModelAndView modelAndView = new ModelAndView("redirect:/plano");
		redirectAtt.addFlashAttribute("mensagem", "Plano apagado com sucesso");
		return modelAndView;
	}
	
}
