package br.com.arjnet.controle.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import br.com.arjnet.controle.modelo.Cliente;
import br.com.arjnet.controle.modelo.Plano;
import br.com.arjnet.controle.servico.ClienteService;
import br.com.arjnet.controle.servico.PlanoService;

@RequestMapping("/cliente")
@Controller
public class ClienteController {

	@Autowired
	private ClienteService clienteService;

	@Autowired
	private PlanoService planoService;

	@GetMapping("/formulario")
	public ModelAndView formulario() {
		ModelAndView modelAndView = new ModelAndView("ClienteFormulario");
		modelAndView.addObject("Cliente", new Cliente());

		return modelAndView;
	}

	@PostMapping
	public ModelAndView salvar(@Validated @ModelAttribute("Cliente") Cliente cliente, Errors errors,
			RedirectAttributes redirectAttr) {
		ModelAndView modelAndView = new ModelAndView("ClienteFormulario");
		cliente.valida();

		if (errors.hasErrors())
			return modelAndView;

		modelAndView.clear();
		clienteService.salvar(cliente);
		redirectAttr.addFlashAttribute("mensagem", "Cliente " + cliente.getRazaoSocial() + " salvo com sucesso");
		modelAndView.setViewName("redirect:cliente");

		System.out.println(clienteService.buscar(cliente.getId()).getLogins().get(0).getPlano().getNomePlano());

		return modelAndView;
	}

	@GetMapping
	public ModelAndView listar() {
		ModelAndView modelAndView = new ModelAndView("ClienteLista");
		List<Cliente> clientes = clienteService.buscaTodos();
		modelAndView.addObject("clientes", clientes);
		return modelAndView;
	}

	@GetMapping("{id}")
	public ModelAndView buscar(@PathVariable("id") Long id) {
		ModelAndView modelAndView = new ModelAndView("Cliente");
		Cliente cliente = clienteService.buscar(id);
		modelAndView.addObject("Cliente", cliente);
		return modelAndView;

	}

	@GetMapping("editar/{id}")
	public ModelAndView editar(@PathVariable("id") Long id) {
		ModelAndView modelAndView = new ModelAndView("ClienteFormulario");
		Cliente cliente = clienteService.buscar(id);
		modelAndView.addObject("Cliente", cliente);

		return modelAndView;
	}

	@DeleteMapping("{id}")
	public ModelAndView apagar(@PathVariable("id") Long id, RedirectAttributes redirectAttributes) {
		ModelAndView modelAndView = new ModelAndView("redirect:/cliente");
		clienteService.apaga(id);
		redirectAttributes.addFlashAttribute("mensagem", "Cliente excluido com sucesso");
		return modelAndView;
	}

	@ModelAttribute
	public List<Plano> planos() {
		return planoService.buscaTodos();
	}

}
