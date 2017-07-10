$(document).ready(function() {
	alternaFisicaJuridica();

	$("div.senha").click(function(){
		toggleSenha(this);
	});
	
	$("#tipo").change(function() {
		alternaFisicaJuridica();
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
		
		$("div.excluirEmail").click(function(){
			$(this).parent().fadeOut(300,function(){
				$(this).remove();
				arrumaIndicesEmail();
			});
			
			return false;
		});
		
		return false;
	});
	
	
	$("#cnpj").mask("99.999.999/9999-99");
	$("[type='tel']").mask("(99) 99999-9999");
	$(".cep").mask("99999-999");
	$(".ip").mask("099.099.099.099");
	$(".mac").mask("FF.FF.FF.FF.FF.FF.FF.FF",{
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
							console.log(index);
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
	var senha = $(div).parent().parent()
			.find("input");
	
	if($(div).hasClass("glyphicon-eye-close")){
		$(senha).attr("type","password");
	}else if($(div).hasClass("glyphicon-eye-open")){
		$(senha).attr("type","text");
	}
	
	$(div).toggleClass("glyphicon-eye-close")
	.toggleClass("glyphicon-eye-open");
}
