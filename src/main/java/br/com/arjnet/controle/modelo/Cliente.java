package br.com.arjnet.controle.modelo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.validator.constraints.NotBlank;

import br.com.arjnet.controle.modelo.enums.TipoPessoa;

@Entity
public class Cliente extends Pessoa {

	private static final long serialVersionUID = 1L;

	@NotBlank(message = "Nome do reponsável deve ser informado")
	private String responsavel;

	private Boolean ativo;

	@Temporal(TemporalType.TIMESTAMP)
	private Date dataCricacao;

	@OneToOne(cascade = CascadeType.ALL)
	private Contato contato;

	@OneToMany(cascade = CascadeType.ALL)
	private List<Endereco> enderecos;

	@OneToMany(cascade = CascadeType.ALL)
	private List<Login> logins;

	public String getResponsavel() {
		return responsavel;
	}

	public void setResponsavel(String responsavel) {
		this.responsavel = responsavel;
	}

	public Boolean getAtivo() {
		return ativo;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}

	public Date getDataCricacao() {
		return dataCricacao;
	}

	public void setDataCricacao(Date dataCricacao) {
		this.dataCricacao = dataCricacao;
	}

	public Contato getContato() {
		if (this.contato == null)
			this.contato = new Contato();

		return contato;
	}

	public void setContato(Contato contato) {
		this.contato = contato;
	}

	public List<Endereco> getEnderecos() {
		if (this.enderecos == null) {
			this.enderecos = new ArrayList<Endereco>();
			this.enderecos.add(new Endereco());
		}
		return enderecos;
	}

	public void setEnderecos(List<Endereco> enderecos) {
		this.enderecos = enderecos;
	}

	public Cliente valida() {
		if (this.getTipo() == TipoPessoa.FISICA) {
			this.setCnpj(null);
			this.setInscricaoEstadual(null);
			this.setInscricaoMunicipal(null);
		} else if (this.getTipo() == TipoPessoa.JURIDICA) {
			this.setCpf(null);
			this.setSexo(null);
			this.setRg(null);
		}
		return this;
	}
}
