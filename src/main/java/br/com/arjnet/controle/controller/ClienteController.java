package br.com.arjnet.controle.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import br.com.arjnet.controle.modelo.Cliente;
import br.com.arjnet.controle.servico.ClienteService;

@RequestMapping("/cliente")
@Controller
public class ClienteController {

	@Autowired
	private ClienteService clienteService;

	@GetMapping("/formulario")
	public ModelAndView formulario() {
		ModelAndView modelAndView = new ModelAndView("ClienteFormulario");
		modelAndView.addObject("Cliente", new Cliente());
		return modelAndView;
	}

	@PostMapping
	public ModelAndView salvar(@Validated @ModelAttribute("Cliente") Cliente cliente, Errors errors,
			RedirectAttributes redirectAttr) {
		System.out.println(cliente.getEnderecos().get(0).getUf());
		ModelAndView modelAndView = new ModelAndView("ClienteFormulario");
		cliente.valida();

		if (errors.hasErrors())
			return modelAndView;

		modelAndView.clear();
		clienteService.salvar(cliente);
		redirectAttr.addFlashAttribute("mensagem", "Cliente " + cliente.getRazaoSocial() + " salvo com sucesso");
		modelAndView.setViewName("redirect:cliente");
		return modelAndView;
	}

	@GetMapping
	public ModelAndView listar() {
		ModelAndView modelAndView = new ModelAndView("ClienteLista");
		List<Cliente> clientes = clienteService.buscaTodos();
		modelAndView.addObject("clientes", clientes);
		return modelAndView;
	}

}
