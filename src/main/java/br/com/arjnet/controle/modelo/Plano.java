package br.com.arjnet.controle.modelo;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.format.annotation.NumberFormat;
import org.springframework.format.annotation.NumberFormat.Style;

@Entity
public class Plano implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	
	@NotBlank(message="O nome do plano deve ser informado")
	@Column(unique=true)
	private String nomePlano;
	
	@NotNull(message="O valor do plano deve ser informado")
	@Min(value=0, message="O valor do plano não pode ser negativo")
	@NumberFormat(style=Style.CURRENCY)
	private BigDecimal valor;
	
	@NotNull(message="A velocidade de download deve ser informada")
	@Min(value=1, message="A velocidade de download não pode ser menor que 1 Kb/s")
	@NumberFormat(pattern="#,##0")
	private Long velocidadeDownKb;
	
	@NotNull(message="A velocidade de upload deve ser informada")
	@Min(value=1, message="A velocidade de download não pode ser menor que 1 Kb/s")
	@NumberFormat(pattern="#,##0")
	private Long velocidadeUpKb;
	
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomePlano() {
		return nomePlano;
	}

	public void setNomePlano(String nomePlano) {
		this.nomePlano = nomePlano;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}

	public Long getVelocidadeDownKb() {
		return velocidadeDownKb;
	}

	public void setVelocidadeDownKb(Long velocidadeDownKb) {
		this.velocidadeDownKb = velocidadeDownKb;
	}

	public Long getVelocidadeUpKb() {
		return velocidadeUpKb;
	}

	public void setVelocidadeUpKb(Long velocidadeUpKb) {
		this.velocidadeUpKb = velocidadeUpKb;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Plano other = (Plano) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
