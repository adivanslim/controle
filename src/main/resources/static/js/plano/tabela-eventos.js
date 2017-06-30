$(document).ready(function(){
   $("tbody>tr").each(function(){
	   
	   $(this).hover(function(){
		   $(this).css("cursor", "pointer");
	   });
	   
	   $(this).click(function(){
		   planoId = $(this).children().first().text();
		   if(!isNaN(parseFloat(planoId))){
			   window.location.replace("/plano/" + planoId);
		   }
	   });
   });
});
