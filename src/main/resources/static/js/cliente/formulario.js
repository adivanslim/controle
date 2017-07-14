$(document).ready(function() {
	alternaFisicaJuridica();

	$("div.toggleSenha").click(function(){
		toggleSenha(this);
	});
	
	$("#tipo").change(function() {
		alternaFisicaJuridica();
	});
	
	$("div.apagaEndereco").click(function(){
		apagarEndereco($(this));
	});
	
	$("div#novoEndereco").click(function(){
		var divPanel = $("div.enderecos").find("div.enderecoAppend").clone();
		
		divPanel.removeClass("enderecoAppend")
					.find("div.panel-title").text("Endereço Alternativo");
		
		divPanel.find("div#novoEndereco")
					.removeAttr("id")
					.removeClass("btn-info  glyphicon-plus")
					.addClass("btn-danger  glyphicon-trash apagaEndereco");
		
		divPanel.find("input").val("");
		divPanel.find("textarea").val("");
		
		var ultimoIndice = ultimoIndiceDisponivelEndereco($("div.enderecos"));
		
		divPanel.find("[for='cep0']").attr("for","cep"+ultimoIndice);
		divPanel.find("[for='logradouro0']").attr("for","logradouro"+ultimoIndice);
		divPanel.find("[for='numero0']").attr("for","numero"+ultimoIndice);
		divPanel.find("[for='complemento0']").attr("for","complemento"+ultimoIndice);
		divPanel.find("[for='bairro0']").attr("for","bairro"+ultimoIndice);
		divPanel.find("[for='referencia0']").attr("for","referencia"+ultimoIndice);		
		divPanel.find("[for='cidade0']").attr("for","cidade"+ultimoIndice);
		divPanel.find("[for='uf0']").attr("for","uf"+ultimoIndice);
		divPanel.find("[for='descricao0']").attr("for","descricao"+ultimoIndice);
		
		divPanel.find("#cep0").attr({
			"name":"enderecos["+ultimoIndice+"].cep",
			"id":"cep"+ultimoIndice
		});
		
		divPanel.find("#logradouro0").attr({
			"name":"enderecos["+ultimoIndice+"].logradouro",
			"id":"logradouro"+ultimoIndice
		});
		
		divPanel.find("#numero0").attr({
			"name":"enderecos["+ultimoIndice+"].numero",
			"id":"numero"+ultimoIndice
		});
		
		divPanel.find("#complemento0").attr({
			"name":"enderecos["+ultimoIndice+"].complemento",
			"id":"complemento"+ultimoIndice
		});
		
		divPanel.find("#bairro0").attr({
			"name":"enderecos["+ultimoIndice+"].bairro",
			"id":"bairro"+ultimoIndice
		});
		
		divPanel.find("#referencia0").attr({
			"name":"enderecos["+ultimoIndice+"].referencia",
			"id":"referencia"+ultimoIndice
		});
		
		divPanel.find("#cidade0").attr({
			"name":"enderecos["+ultimoIndice+"].cidade",
			"id":"cidade"+ultimoIndice
		});
		
		divPanel.find("#uf0").attr({
			"name":"enderecos["+ultimoIndice+"].uf",
			"id":"uf"+ultimoIndice
		});
		
		divPanel.find("#descricao0").attr({
			"name":"enderecos["+ultimoIndice+"].descricao",
			"id":"descricao"+ultimoIndice
		});
		
		$("div.enderecos").append(divPanel);
		
		$("#cep"+ultimoIndice).mask("99999-999");
		
		$("div.apagaEndereco").unbind();
		$("div.apagaEndereco").click(function(){
			apagarEndereco($(this));
		});
		
	});
	
	$("div.apagaLogin").click(function(){
		apagarLogin($(this));
	});
	
	
	$("div#novoLogin").click(function(){
		var divPanel = $("div.logins").find("div.loginAppend").clone();
		
		divPanel.removeClass("loginAppend");
		
		divPanel.find("div#novoLogin")
					.removeAttr("id")
					.removeClass("btn-info  glyphicon-plus")
					.addClass("btn-danger  glyphicon-trash apagaLogin");
		
		divPanel.find("input").val("");
		
		var ultimoIndice = ultimoIndiceDisponivelEmail($("div.logins"));
		
		divPanel.find("[for='usuario0']").attr("for","usuario"+ultimoIndice);
		divPanel.find("[for='senha0']").attr("for","senha"+ultimoIndice);
		divPanel.find("[for='numeroConexoes0']").attr("for","numeroConexoes"+ultimoIndice);
		divPanel.find("[for='ipReservado0']").attr("for","ipReservado"+ultimoIndice);
		divPanel.find("[for='macReservado0']").attr("for","macReservado"+ultimoIndice);
		divPanel.find("[for='ativo0']").attr("for","ativo"+ultimoIndice);		
		
		divPanel.find("#usuario0").attr({
			"name":"logins["+ultimoIndice+"].usuario",
			"id":"usuario"+ultimoIndice
		});
		
		divPanel.find("#senha0").attr({
			"name":"logins["+ultimoIndice+"].senha",
			"id":"senha"+ultimoIndice
		});
		
		divPanel.find("#numeroConexoes0").attr({
			"name":"logins["+ultimoIndice+"].numeroConexoes",
			"id":"numeroConexoes"+ultimoIndice
		});
		
		divPanel.find("#ipReservado0").attr({
			"name":"logins["+ultimoIndice+"].ipReservado",
			"id":"ipReservado"+ultimoIndice
		});
		
		divPanel.find("#macReservado0").attr({
			"name":"logins["+ultimoIndice+"].macReservado",
			"id":"macReservado"+ultimoIndice
		});
		
		divPanel.find("#ativo0").attr({
			"name":"logins["+ultimoIndice+"].ativo",
			"id":"ativo"+ultimoIndice
		});
		
		$("div.logins").append(divPanel);
		
		$(".mac").mask("FF:FF:FF:FF:FF:FF",{
			"translation":{F:{pattern:/[A-Fa-f0-9]/}}
		});
		
		$(".ip").mask("099.099.099.099");
		
		$("div.apagaLogin").unbind();
		
		$("div.apagaLogin").click(function(){
			apagarLogin($(this));
		});
		
		$("div.toggleSenha").unbind();
		
		$("div.toggleSenha").click(function(){
			toggleSenha(this);
		});
		
	});
	
	
	$("div.excluirTelefone").click(function(){
		$(this).parent().fadeOut(300,function(){
			$(this).remove();
			arrumaIndicesTel();
		});
		
		return false;
	});
	
	$("div.excluirEmail").click(function(){
		$(this).parent().fadeOut(300,function(){
			$(this).remove();
			arrumaIndicesEmail();
		});
		
		return false;
	});
	
	
	
	$("#novoTelefone").click(function(){
		
		var div = $("div.appendFone").clone();
		
		var divTelefone = $("div.telefones");
		
		div	.removeClass("appendFone")
			.find("div#novoTelefone")
			.removeClass("btn-info glyphicon glyphicon-plus")
			.addClass("btn-danger glyphicon glyphicon-trash excluirTelefone")
			.removeAttr("id");
		
		div.find("input").val("");
		
		var ultimoIndice = ultimoIndiceDisponivel(divTelefone); 
		
		
		div.find("label")
			.attr("for","telefone" + ultimoIndice );
		
		div.find("[type='tel']")
			.attr({
				"id":"telefone"+ultimoIndice,
				"name":"contato.telefone["+ultimoIndice+"]"
			});
		
		divTelefone.append(div);
		
		$("[type='tel']").mask("(99) 99999-9999");
		
		$("div.excluirTelefone").unbind();
		
		$("div.excluirTelefone").click(function(){
			$(this).parent().fadeOut(300,function(){
				$(this).remove();
				arrumaIndicesTel();
			});
			
			return false;
		});
		
		return false;
	});
	
	$("#novoEmail").click(function(){
		var div = $("div.appendEmail").clone();
		
		var divEmail = $("div.emails");
		
		div	.removeClass("appendEmail")
			.find("div#novoEmail")
			.removeClass("btn-info glyphicon glyphicon-plus")
			.addClass("btn-danger glyphicon glyphicon-trash excluirEmail")
			.removeAttr("id");
		
		div.find("input").val("");
		
		var ultimoIndice = ultimoIndiceDisponivel(divEmail);
		
		div.find("label")
			.attr("for","email"+ultimoIndice);
		
		div.find("[type='email']")
			.attr({
				"id":"email"+ultimoIndice ,
				"name":"contato.email["+ultimoIndice+"]"
			});
		
		divEmail.append(div);
		
		$("div.excluirEmail").unbind();
		
		$("div.excluirEmail").click(function(){
			$(this).parent().fadeOut(300,function(){
				$(this).remove();
				arrumaIndicesEmail();
			});
			
			return false;
		});
		
		return false;
	});
	
	$(".mac").mask("FF:FF:FF:FF:FF:FF",{
		"translation":{F:{pattern:/[A-Fa-f0-9]/}}
	});
	
	$("form#validar").submit(function(){
		var tipo = $("#tipo");
		
		if (tipo.val() === "FISICA") {
			$("input#cnpj").val("41.027.265/0001-60");
		} else if (tipo.val() === "JURIDICA") {
			$("input#cpf").val("228.018.988-72");
		}
	});
	
	$(".has-error>div>input").first().focus();
	
});

function alternaFisicaJuridica() {
	var tipo = $("#tipo");

	if (tipo.val() === "FISICA") {
		$("div.cnpj").hide();
		$("div.inscEst").hide();
		$("div.inscMun").hide();
		$("div.cpf").show();
		$("div.sexo").show();
		$("div.rg").show();
		
		$("#cnpj").removeAttr("required");
		$("#inscricaoEstadual").removeAttr("required");
		$("#inscricaoMunicipal").removeAttr("required");
		$("#cpf").attr("required","required");
		$("#rg").attr("required","required");
		$("#sexo").attr("required","required");
		
		$("label.dataNasc").text("Data de Nascimento");
	} else if (tipo.val() === "JURIDICA") {
		$("div.cpf").hide().val("");
		$("div.sexo").hide();
		$("div.rg").hide();
		$("div.cnpj").show();
		$("div.inscEst").show();
		$("div.inscMun").show();
		
		$("#cpf").removeAttr("required");
		$("#rg").removeAttr("required");
		$("#sexo").removeAttr("required");
		$("#cnpj").attr("required","required");
		$("#inscricaoEstadual").attr("required","required");
		$("#inscricaoMunicipal").attr("required","required");
		
		$("label.dataNasc").text("Data de Fundação");
	}
	
}

function arrumaIndicesTel(){
	$("div.telefones")
					.find("div.form-group")
					.each(function(index){
							$(this).find("label").attr("for",("telefone" + index));
							$(this).find("[type='tel']")
									.attr({
											"id":("telefone"+index),
											"name":("contato.telefone["+index+"]")
										});
						});

}

function arrumaIndicesEmail(){
	$("div.emails")
					.find("div.form-group")
					.each(function(index){
							$(this).find("label").attr("for",("email" + index));
							$(this).find("[type='email']")
									.attr({
											"id":("email"+index),
											"name":("contato.email["+index+"]")
										});
						});

}

function ultimoIndiceDisponivel(div){
	var indice = div
				.find("div.form-group")
				.last()
				.find("input")
				.attr("id")
				.replace("telefone","")
				.replace("email","");
	
	return Number(indice) + 1;
}

function toggleSenha(div){
	var senha = $(div).parent().find("input");
	var icone = $(div).find("div.icone");
	
	if($(icone).hasClass("glyphicon-eye-close")){
		$(senha).attr("type","password");
	}else if($(icone).hasClass("glyphicon-eye-open")){
		$(senha).attr("type","text");
	}
	
	$(icone).toggleClass("glyphicon-eye-close")
						.toggleClass("glyphicon-eye-open");
}

function ultimoIndiceDisponivelEndereco(div){
	var indice = div
					.find("div.panel")
					.last()
					.find("input")
					.first()
					.attr("id")
					.replace("cep","");
	return Number(indice) + 1;
}

function ultimoIndiceDisponivelEmail(div){
	var indice = div
					.find("div.panel")
					.last()
					.find("input")
					.first()
					.attr("id")
					.replace("usuario","");
return Number(indice) + 1;
}

function apagarEndereco(div){
	div.parent().parent().parent().parent().fadeOut(300,function(){
		$(this).remove();
		arrumarIndiciesEndereco();
	});
}

function apagarLogin(div){
	div.parent().parent().parent().parent().fadeOut(300,function(){
		$(this).remove();
		arrumarIndiciesEmail();
	});
}

function arrumarIndiciesEmail(){
	$("div.enderecos").find("div.panel").each(function(indice){
		$(this).find("[for^=usuario]").attr("for","usuario"+indice);
		$(this).find("[for^=senha]").attr("for","senha"+indice);
		$(this).find("[for^=numeroConexoes]").attr("for","numeroConexoes"+indice);
		$(this).find("[for^=ipReservado]").attr("for","ipReservado"+indice);
		$(this).find("[for^=macReservado]").attr("for","macReservado"+indice);
		$(this).find("[for^=ativo]").attr("for","ativo"+indice);
		
		$(this).find("[id^=usuario]").attr({
			"name":"logins["+indice+"].usuario",
			"id":"usuario"+indice
		});
		
		$(this).find("[id^=senha]").attr({
			"name":"logins["+indice+"].senha",
			"id":"senha"+indice
		});
		
		$(this).find("[id^=numeroConexoes]").attr({
			"name":"logins["+indice+"].numeroConexoes",
			"id":"numeroConexoes"+indice
		});
		
		$(this).find("[id^=ipReservado]").attr({
			"name":"logins["+indice+"].ipReservado",
			"id":"ipReservado"+indice
		});
		
		$(this).find("[id^=macReservado]").attr({
			"name":"logins["+indice+"].macReservado",
			"id":"macReservado"+indice
		});
		
		$(this).find("[id^=ativo]").attr({
			"name":"logins["+indice+"].ativo",
			"id":"ativo"+indice
		});
	});
}

function arrumarIndiciesEndereco(){
	$("div.enderecos").find("div.panel").each(function(indice){
		$(this).find("[for^=cep]").attr("for","cep"+indice);
		$(this).find("[for^=logradouro]").attr("for","logradouro"+indice);
		$(this).find("[for^=numero]").attr("for","numero"+indice);
		$(this).find("[for^=complemento]").attr("for","complemento"+indice);
		$(this).find("[for^=bairro]").attr("for","bairro"+indice);
		$(this).find("[for^=referencia]").attr("for","referencia"+indice);		
		$(this).find("[for^=cidade]").attr("for","cidade"+indice);
		$(this).find("[for^=uf]").attr("for","uf"+indice);
		$(this).find("[for^=descricao]").attr("for","descricao"+indice);
		
		$(this).find("[id^=cep]").attr({
			"name":"enderecos["+indice+"].cep",
			"id":"cep"+indice
		});
		
		$(this).find("[id^=logradouro]").attr({
			"name":"enderecos["+indice+"].logradouro",
			"id":"logradouro"+indice
		});
		
		$(this).find("[id^=numero]").attr({
			"name":"enderecos["+indice+"].numero",
			"id":"numero"+indice
		});
		
		$(this).find("[id^=complemento]").attr({
			"name":"enderecos["+indice+"].complemento",
			"id":"complemento"+indice
		});
		
		$(this).find("[id^=bairro]").attr({
			"name":"enderecos["+indice+"].bairro",
			"id":"bairro"+indice
		});
		
		$(this).find("[id^=referencia]").attr({
			"name":"enderecos["+indice+"].referencia",
			"id":"referencia"+indice
		});
		
		$(this).find("[id^=cidade]").attr({
			"name":"enderecos["+indice+"].cidade",
			"id":"cidade"+indice
		});
		
		$(this).find("[id^=uf]").attr({
			"name":"enderecos["+indice+"].uf",
			"id":"uf"+indice
		});
		
		$(this).find("[id^=descricao]").attr({
			"name":"enderecos["+indice+"].descricao",
			"id":"descricao"+indice
		});
		
	});
}

